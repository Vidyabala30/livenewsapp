//home
import React, { Component } from 'react'
import {getNewsArticles} from './api';
import { Container, Header } from "semantic-ui-react";
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import  {getArticles} from './api';

export default class home extends Component {
    state = {
        articles: [],
        apiError: "",
        searchTopic: "",
        totalResults: "",
        loading: false,
    };
    
    async componentDidMount() {
    try {
        const response = await getNewsArticles();
        this.setState({ articles: response.articles });
    } catch (error) {
        this.setState({ apiError: "Could not find any articles " });
    }
    }
    searchForTopic = async (topic) => {
    try {
        this.setState({ loading: true});
        const response = await getArticles(topic);
        this.setState({
        articles: response.articles,
        searchTopic: topic,
        totalResults: response.totalResults,
        }); 
    
    } catch (error) {
        this.setState({ apiError: "Could not find any articles " });
    }
    this.setState({ loading: false });
    };

    render() {
        const { articles, apiError,loading,searchTopic,totalResults, } = this.state
        return (
            <div>
                <Container>
                    
                    <h1 className="ui dividing header" style={{marginTop: 50, color: "CadetBlue"}}>
                    Top News Headlines </h1>
                    <SearchBar searchForTopic={this.searchForTopic} />
                    {loading && (
                    <p style={{ textAlign: "center" , marginTop:50}}>Searching for articles...</p>
                    )}
                    {articles.length > 0 && (
                    <Header as="h4" style={{ textAlign: "center", margin: 20 }}>
                        Found {totalResults} articles on "{searchTopic}"
                    </Header>
                    )}
                    {articles.length > 0 && <ArticleList articles={articles} />}
                    {apiError && <p>Could not fetch any articles. Check your internet connection.</p>}
                    
                </Container>
            </div>
        )
    }
}
