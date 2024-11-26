import React,{Component} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";



export class News extends Component{
    
    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false,
            page:1,
            totalResults:0
        }
    }

    async componentDidMount(){
        this.fetchNews();
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.category !== this.props.category||prevProps.searchInput !== this.props.searchInput) {
          this.setState({ page: 1 }, this.fetchNews); 
        }
    }

    fetchNews= async()=>{
        console.log(this.state.page)
        let url = this.props.searchInput
        ?`https://newsapi.org/v2/top-headlines?q=${this.props.searchInput}&apiKey=9feb8626a4474e9b9a6c8989aad09664&page=${this.state.page}&pageSize=${this.props.pageSize}`
        :`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9feb8626a4474e9b9a6c8989aad09664&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading:false})
        console.log(parsedData)
        this.setState({articles : parsedData.articles,totalResults:parsedData.totalResults})
    }

    handlePrevPage =async()=>{
        console.log("previous")
        this.setState((prevState)=>({page:prevState.page-1}),this.fetchNews)
    }

    handleNextPage=async(e)=>{
        console.log("Next")
        if(Math.ceil(this.state.totalResults/this.props.pageSize)<this.state.page+1){
            return;
        }
        this.setState(
            (prevState) => ({ page: prevState.page + 1 }),
            this.fetchNews
        );
    }

    render (){
        return(
            <>
                <h2 className={`my-2 text-center ${this.props.darkMode?"text-white" : "text-dark"}`}>Top  {this.props.searchInput?this.props.searchInput:this.props.category} headline</h2>
                {this.state.loading && <Spinner/>}
                <div className="row mt-2 g-4">
                    {!this.state.loading && this.state.articles.map((item)=>{
                        return <div key={item.url} className="col-lg-3">
                                    <NewsItem title={item.title} decription={item.description} imageUrl ={item.urlToImage} newsUrl = {item.url} date = {item.publishedAt} author={item.author} source={item.source.name} darkMode = {this.props.darkMode}/>
                                </div>
                    })}
                </div>
                <div className="my-3 d-flex justify-content-between">
                    <button disabled={this.state.page <=1} className="btn btn-dark" onClick={this.handlePrevPage}>&larr; Previous</button>
                    <p className="bg-dark text-center text-light rounded-circle" style={{width:"25px",height:"25px",lineHeight:"25px"}}>{this.state.page}</p>
                    <button disabled={Math.ceil(this.state.totalResults/this.props.pageSize)<this.state.page+1} className="btn btn-dark" onClick={this.handleNextPage}>Next &rarr;</button>
                </div>
            </>
        )
    }
}

export default News;