//displaying article
import React, { Component } from 'react'
import { List,Header,Image,Segment } from "semantic-ui-react";
import { Button} from "semantic-ui-react";



export default class eachArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: props.location.state.article
        }
    }
    handleClick = () => {
        this.props.history.push("/home")
    }
    
    render() {
        console.log(this.state.article)
        return (
         <div>
                <Segment>
                        <Image class="center"src={this.state.article.urlToImage}size=' <Segment>small' centered />
                </Segment>
                    <Header as="h1"  color='black'>{this.state.article.title}</Header>
                        <List.Description style={{ margin: "20px 0" ,color: "cadetblue"  }}>{this.state.article.description}
                        </List.Description>
                        <List bulleted horizontal>
                        <List.Item>
                         <p style={{color:"cadetblue"}}> {this.state.article.source.name}</p>
                    </List.Item>
                    <List.Item >
                            {this.state.article.publishedAt.split("T")[0]}</List.Item>
                    </List>
                    <div>
                    <Button  floated='left' color="blue"   onClick = {this.handleClick}>
                      Back
                    </Button>
                 </div>
         </div>
        )
    }
} 
