import { List,Grid,Header,Image } from "semantic-ui-react";
import {withRouter ,Link} from 'react-router-dom'

import React, { Component } from 'react'


class ArticleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: this.props.article
    }
  }

  
  render() {
    
    return (
      <div>
        <List.Item style={{ padding: 30 }}>
          <Grid>
            <Grid.Column
              width={11}
              style={{
                display: "flex", 
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Header as="h3">{this.state.article.title}</Header>
               <List.Description style={{ margin: "20px 0" }}>
                  {this.state.article.description}
                </List.Description>
                 <List bulleted horizontal>
                  <List.Item>
                  <Link to={{
                    pathname: '/article',
                    state: { article: this.state.article }
                  }}>
                      <p>{this.state.article.source.name}</p>
                  </Link>
                  </List.Item>
                  <List.Item>{this.state.article.publishedAt.split("T")[0]}</List.Item>
                  </List>
                 </Grid.Column>
                 <Grid.Column width={5}>
                   <Image src={this.state.article.urlToImage} />
                 </Grid.Column>
               </Grid>
      </List.Item>
      
      </div>
      
    )
  }
}


// 
/*
const ArticleItem = (props) => {
    const { article } = props;

    return (
        <List.Item style={{ padding: 30 }}>
          <Grid>
            <Grid.Column
              width={11}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Header as="h3">{article.title}</Header>
              <List.Description style={{ margin: "20px 0" }}>
                {article.description}
              </List.Description>
              <List bulleted horizontal>
                <List.Item>
                  <Link to="/article">
                      <p>{article.source.name}</p>
                  </Link>
                </List.Item>
                <List.Item>{article.publishedAt.split("T")[0]}</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <Image src={article.urlToImage} />
            </Grid.Column>
          </Grid>
        </List.Item>
      );
    };
*/



  const ArticleList = (props) => {
    return (
      <List divided style={{ maxWidth: 900, margin: "0 auto" }}>
        {props.articles.map((article, index) => (
          <ArticleItem article={article} key={article.title + index} />
        ))}
      </List>
    );
  };
export default withRouter(ArticleList);