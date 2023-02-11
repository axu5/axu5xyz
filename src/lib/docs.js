const docs = {
    beginner: {
        access_to_the_internet: "Access to the Internet",
        email: "Email",
        creating_passwords: "Creating passwords",
        google_search_skills: "Google search skills",
        google_docs: "Google docs",
        how_to_print_documents: "How to print documents",
    },

    intermediate: {
        advanced_google_skills: "Advanced Google skills",
        google_sheets: "Google Sheets",
        google_slides: "Google Slides",
        kami: "Kami",
        google_calendar: "Google Calendar",
        libre_office: "Libre Office",
    },

    advanced: {},
};

export function getAllDocs() {
    return docs;
}

export function getDocBySlug(slug) {
    const [first, second] = slug.split(/\//g);
    return docs[first][second];
}
