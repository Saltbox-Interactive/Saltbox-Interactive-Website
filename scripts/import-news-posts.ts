import { createClient } from '@sanity/client'
import { newsPosts } from '../lib/data/news'

const client = createClient({
  projectId: '3pup2fx7',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN, // You'll need to create this token
  apiVersion: '2024-01-01',
})

async function importNewsPosts() {
  console.log(`Starting import of ${newsPosts.length} news posts...`)

  for (const post of newsPosts) {
    try {
      // Convert markdown content to Sanity blocks
      // For now, we'll create a simple paragraph block
      // You can enhance this later to parse markdown properly
      const contentBlocks = post.content.split('\n\n').map((paragraph) => {
        // Check if it's a heading
        if (paragraph.startsWith('## ')) {
          return {
            _type: 'block',
            style: 'h2',
            children: [
              {
                _type: 'span',
                text: paragraph.replace('## ', ''),
              },
            ],
          }
        }

        // Check if it's a list
        if (paragraph.includes('\n- ')) {
          const items = paragraph.split('\n- ').filter(item => item.trim())
          return items.map(item => ({
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [
              {
                _type: 'span',
                text: item.replace(/^\*\*(.*?)\*\*/g, '$1'), // Remove bold markers for now
              },
            ],
          }))
        }

        // Regular paragraph
        return {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: paragraph.replace(/\*\*(.*?)\*\*/g, '$1'), // Remove bold markers
            },
          ],
        }
      }).flat()

      const sanityPost = {
        _type: 'newsPost',
        _id: post.slug, // Use slug as ID to prevent duplicates
        title: post.title,
        slug: {
          _type: 'slug',
          current: post.slug,
        },
        excerpt: post.excerpt,
        coverImage: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: `image-${post.slug}`, // Placeholder - you'll need to upload images manually
          },
        },
        category: post.category,
        project: post.project,
        content: contentBlocks,
        author: post.author,
        date: new Date(post.date).toISOString(),
        tags: post.tags,
        featured: post.featured || false,
      }

      console.log(`Importing: ${post.title}`)

      // Create or update the document
      await client.createOrReplace(sanityPost)

      console.log(`✓ Successfully imported: ${post.title}`)
    } catch (error) {
      console.error(`✗ Error importing ${post.title}:`, error)
    }
  }

  console.log('\nImport complete!')
  console.log('\nNOTE: You will need to manually upload cover images in the Sanity Studio.')
  console.log('Go to each post and upload the corresponding image from your /public/images folder.')
}

importNewsPosts()
