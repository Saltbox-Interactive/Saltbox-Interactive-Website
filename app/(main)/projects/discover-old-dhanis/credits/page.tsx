"use client";

import { useState } from "react";
import BracketButton from "@/components/ui/BracketButton";

export default function CreditsPage() {
  const [copied, setCopied] = useState(false);
  const citationText =
    "Markert, Patricia G., Michael Salton, Emily Missetta Grant, and Joyce Lee. Discover Old D'Hanis for Windows/Mac, V. 1., Saltbox Interactive.";

  const handleCopy = () => {
    navigator.clipboard.writeText(citationText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="min-h-screen bg-black text-foreground py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 mt-12">
          <h1
            className="text-6xl md:text-7xl font-light tracking-[0.2em] text-white mb-4"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            DISCOVER OLD D'HANIS
          </h1>
          <p className="text-xl text-gray-400">Project Credits</p>
        </div>

        {/* Team Section */}
        <section className="mb-16 text-center">
          <h2
            className="text-3xl font-light tracking-wider text-accent mb-8"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            PROJECT TEAM
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>Patricia Markert</li>
            <li>Michael Salton</li>
            <li>Emily Grant</li>
            <li>Hiu Yi Joyce Lee</li>
          </ul>
        </section>

        {/* Additional Help Section */}
        <section className="mb-16 text-center">
          <h2
            className="text-3xl font-light tracking-wider text-accent mb-8"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            ADDITIONAL HELP
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>Terrence Ju</li>
            <li>Ricardo Ortiz Wilkins</li>
          </ul>
        </section>

        {/* Special Thanks Section */}
        <section className="mb-16 text-center">
          <h2
            className="text-3xl font-light tracking-wider text-accent mb-8"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            A SPECIAL THANKS TO
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>Polo Rodriguez</li>
            <li>The Rodriguez Family</li>
            <li>Stella Boone</li>
            <li>Elsie Rothe</li>
            <li>Holy Cross Parish</li>
            <li>John and Margaret Bergmann</li>
            <li>Joe Fohn</li>
            <li>Phil and Mary King</li>
            <li>Tom Fillinger</li>
            <li>Jeremy Trombley</li>
            <li>Mike Katchabaw</li>
          </ul>
        </section>

        {/* Communities Section */}
        <section className="mb-16 text-center">
          <h2
            className="text-3xl font-light tracking-wider text-accent mb-8"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            WITH HEARTFELT THANKS TO THE COMMUNITIES WHO MADE THIS POSSIBLE
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>D'Hanis</li>
            <li>Castroville</li>
            <li>Quihi</li>
            <li>Vandenburg / New Fountain</li>
            <li>Hondo</li>
            <li>Medina County</li>
          </ul>
        </section>

        {/* Field Crew Section */}
        <section className="mb-16 text-center">
          <h2
            className="text-3xl font-light tracking-wider text-accent mb-8"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            THE OLD D'HANIS FIELD CREW (2018)
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>Hunter Crosby</li>
            <li>Nolan O'Hara</li>
            <li>Emily Sainz</li>
          </ul>
        </section>

        {/* Funding and Support Section */}
        <section className="mb-16 text-center">
          <h2
            className="text-3xl font-light tracking-wider text-accent mb-8"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            FUNDING AND SUPPORT
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>Wenner-Gren Foundation</li>
            <li>National Geographic Society</li>
            <li>Council of Texas Archeologists</li>
            <li>Mellon Foundation / American Council of Learned Societies</li>
            <li>Binghamton University Research Foundation</li>
            <li>Western University Faculty of Social Science Research Funds</li>
            <li>Medina County Historical Commission</li>
            <li>Castro Colonies Heritage Association</li>
          </ul>
        </section>

        {/* Resources Section */}
        <section className="mb-16 text-center">
          <h2
            className="text-3xl font-light tracking-wider text-accent mb-8"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            FEATURING RESOURCES FROM
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>The Old D'Hanis Archaeological Mapping Project</li>
            <li>St. Dominic's / Holy Cross Parish Records (FamilySearch.com)</li>
            <li>University of San Antonio Libraries</li>
            <li>Medina County Land Records</li>
            <li>Rothe & Associates, PLLC</li>
            <li>The Portal to Texas History, University of North Texas Libraries</li>
            <li>The Dolph Briscoe Center for American History</li>
            <li>Texas General Land Office</li>
            <li>The Library of Congress</li>
            <li>Ancestry.com</li>
            <li>Texas State Library and Archives</li>
            <li>Texas Digital Archive</li>
            <li>Newspapers.com</li>
          </ul>
        </section>

        {/* Quotes and Citations Section */}
        <section className="mb-16">
          <h2
            className="text-3xl font-light tracking-wider text-accent mb-8"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            FEATURING QUOTES AND CITATIONS FROM
          </h2>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              Barr, Alwyn (2004) The African Texans. University of Texas Institute of Texan Cultures
              at San Antonio. San Antonio.
            </li>
            <li>
              CCHA Castro Colonies Heritage Association (Compilation) (1994) The History of Medina
              County, Texas (Vol. 1). Curtis Media. Dallas.
            </li>
            <li>
              Crook, Cornelia (1988) Henri Castro: A Study of Early Colonization in Texas. St.
              Mary's University Press. San Antonio.
            </li>
            <li>
              Domenech, Abbé (1858) Missionary Adventures in Texas and Mexico: A Personal Narrative
              of Six Years Sojourn in those Regions. Longman, Brown, Green, Longmans and Roberts.
              London.
            </li>
            <li>
              Fohn, Nicholas (1981) Fohn Memories: Heritage of a Castro Colony Immigrant Family in
              Texas. Self-published by Nicholas H. Fohn. Uvalde, Texas.
            </li>
            <li>
              Jordan, Terry G. (1978) Texas Log Buildings: A Folk Architecture. University of Texas
              Press Austin.
            </li>
            <li>
              National Register of Historic Places (1972) D'Hanis Historic District. National
              Register of Historic Places Inventory – Nomination Form. National Archives Catalog.
            </li>
            <li>
              Sowell, Andrew Jackson (1986) Texas Indian Fighters. State House Press. McMurry
              University. Abilene.
            </li>
          </ul>
        </section>

        {/* Citation Section */}
        <section className="mb-16 p-6 bg-gray-900/30 border border-accent/20 relative">
          <button
            onClick={handleCopy}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-accent transition-colors duration-300"
            aria-label="Copy citation"
          >
            {copied ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            )}
          </button>
          <h2
            className="text-2xl font-light tracking-wider text-accent mb-4"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            CITATION
          </h2>
          <p className="text-gray-300 italic">
            Markert, Patricia G., Michael Salton, Emily Missetta Grant, and Joyce Lee. Discover Old
            D'Hanis for Windows/Mac, V. 1.,{" "}
            <span className="bg-white text-black px-1">Saltbox Interactive</span>.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <BracketButton href="/projects/discover-old-dhanis">Back to Project</BracketButton>
        </div>
      </div>
    </div>
  );
}
