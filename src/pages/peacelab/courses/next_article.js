import { getAllDocs } from "@/lib/docs";
import { useRouter } from "next/router";

function isServer() {
    return typeof window === "undefined";
}

export default function NextArticle() {
    const { query, isReady, push } = useRouter();
    if (!isServer() && isReady) {
        if (!isReady) return;
        const { curr } = query;
        const docs = getAllDocs();

        const courseLevel = Object.keys(docs);

        const docsArray = Object.values(docs).map(stage => {
            return Object.keys(stage);
        });

        // find which doc
        let sectionIndex = 0;
        let articleIndex = 0;
        outer: for (let row = 0; row < docsArray.length; ++row) {
            for (
                let column = 0;
                column < docsArray[row].length;
                ++column
            ) {
                const lesson = docsArray[row][column];
                if (lesson === curr) {
                    if (column >= docsArray[row].length - 1) {
                        // next section
                        sectionIndex = row + 1;
                        // first article
                        articleIndex = 0;
                    } else {
                        // same section
                        sectionIndex = row;
                        // next article
                        articleIndex = column + 1;
                    }
                    break outer;
                }
            }
        }

        if (
            !courseLevel[sectionIndex] ||
            !docsArray[sectionIndex] ||
            !docsArray[sectionIndex][articleIndex]
        ) {
            push("/peacelab");
        } else {
            push(
                `/peacelab/courses/${courseLevel[sectionIndex]}/${docsArray[sectionIndex][articleIndex]}`
            );
        }
    }
}
