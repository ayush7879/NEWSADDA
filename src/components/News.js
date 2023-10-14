import React, { useEffect ,useState} from "react";
import Newsitem from "./Newsitem";
import PropTypes from 'prop-types'
import Spinner from "./spinner.js";
import InfiniteScroll from "react-infinite-scroll-component";

const  News =(props)=> {
 const [articles, setarticles] = useState([])
 const [loading, setloading]  = useState(true)
 const [page, setpage]  = useState(1)
 const [totalResults, settotalResults]  = useState(0)

 const   convertcapital = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const  updatenews=async ()=> {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${page}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    let parseddata = await data.json();
    setarticles(parseddata.articles);
    settotalResults(parseddata.totalResults);
    setloading(false);
    
  }
  useEffect(() => {
    document.title = `${convertcapital(props.category)}-NEWSADDA`;
    updatenews();
  }, [])
  // next = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updatenews();
  // };
  // prev = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updatenews();
  // };
  const fetchMoreData = async () => {
    
    // console.log(p)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${page+1}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}`;
    // let p=page+1
    // setState({ loading: true });
    // setloading(true);
    setpage(page+1);
    let data = await fetch(url);
    let parseddata = await data.json();
 
  setarticles(articles.concat(parseddata.articles));
  settotalResults(parseddata.articles);
    // setloading(false);
    console.log(articles.length===totalResults);
  };
    return (
      <>
        <h1 className="text-center" style={{ margin: "30px" ,marginTop: '73px'}}>
          NEWSADDA-Top {convertcapital(props.category)} Headlines
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
        >
          <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col md-4 mx-3" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 31) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    time={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>

      
      </>
    );
}
News.defaultProps={
   
  country:'in',
  pageSize:5,
  category:"general"
}
News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category: PropTypes.string
}
export default News;
