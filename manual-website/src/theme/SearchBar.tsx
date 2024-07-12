import React, { useEffect } from 'react';

const SearchBar: React.FC = () => {
    useEffect(() => {
        const loadDocSearch = async () => {
            const docsearch = (await import('@docsearch/js')).default;
            docsearch({
                appId: '5CH7S8QVUG',
                apiKey: '75b290e5307253c6b13731d75c2b2418',
                indexName: 'yellow-sky-0099e7600-5-azurestaticapps',
                container: '#docsearch',
                debug: false,
            });
        };
        loadDocSearch();
    }, []);

    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/@docsearch/css@3"
            />
            <div id="docsearch"></div>
        </>
    );
};

export default SearchBar;
