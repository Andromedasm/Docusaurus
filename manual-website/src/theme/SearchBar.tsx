import React, {useEffect} from 'react';

const SearchBar: React.FC = () => {
    useEffect(() => {
        const loadDocSearch = async () => {
            const docsearch = (await import('@docsearch/js')).default;
            docsearch({
                appId: '0H3JFBH87L',
                apiKey: '7de4f70cd15310df1df63b4afcc4d06f',
                indexName: 'nice-water-0f9cea400-5-azurestaticapps',
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
