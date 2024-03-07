import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'

export class News extends Component {
 /*   
    Method to loop through JSX without using fetch method
    articles= [
        {
          "source": { "id": null, "name": "Yahoo Entertainment" },
          "author": "NAJIB JOBAIN and KAREEM CHEHAYEB",
          "title": "Israel vows to fight on in Gaza despite deadly ambush and rising international pressure - Yahoo News",
          "description": "Israel vowed to keep fighting in Gaza until it crushes Hamas after one of the deadliest single battles of the war for its soldiers, even as it faces mounting...",
          "url": "https://news.yahoo.com/israel-vows-fight-gaza-despite-081936364.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Rh9w8mYulmg.0HZZma.xfw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/db857b589739e7d3a0a2020a56244915",
          "publishedAt": "2023-12-14T13:31:25Z",
          "content": "RAFAH, Gaza Strip (AP) Israel vowed to keep fighting in Gaza until it crushes Hamas after one of the deadliest single battles of the war for its soldiers, even as it faces mounting international call… [+6129 chars]"
        },
        {
          "source": { "id": "associated-press", "name": "Associated Press" },
          "author": "HARRIET MORRIS",
          "title": "Putin says there will be no peace in Ukraine until Russia's goals, still unchanged, are achieved - The Associated Press",
          "description": "Russian President Vladimir Putin says there will be no peace in Ukraine until Moscow achieves its goals, which remain unchanged after nearly two years of fighting. He spoke Thursday at a year-end news conference that gave him an opportunity to reinforce his a…",
          "url": "https://apnews.com/article/putin-russia-press-conference-moscow-ukraine-ef4e88fda50e6ad75b8a1979b95d9fcc",
          "urlToImage": "https://dims.apnews.com/dims4/default/cccc2b0/2147483647/strip/true/crop/7000x3937+0+365/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F38%2F5c%2F289f8832f96047c8d4fc508bb498%2F8b4c13bfb3d645f7914e97b5160fa22e",
          "publishedAt": "2023-12-14T13:30:00Z",
          "content": "MOSCOW (AP) Russian President Vladimir Putin said Thursday there would be no peace in Ukraine until the Kremlin realizes its goals, which remain unchanged after nearly two years of fighting that has … [+6844 chars]"
        },
        {
          "source": { "id": null, "name": "BBC News" },
          "author": null,
          "title": "Samantha Woll: Man charged in fatal stabbing of Detroit Jewish leader - BBC.com",
          "description": "A man has been charged with murder and prosecutors say he was not known to the victim.",
          "url": "https://www.bbc.com/news/world-us-canada-67716291",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/AFE1/production/_132052054__131500856_mediaitem131500855.jpg",
          "publishedAt": "2023-12-14T13:28:00Z",
          "content": "There is 'not a shred of evidence' Michael Jackson-Bolanos, 28, committed a hate crime, prosecutors say\r\nProsecutors have charged a man with the fatal stabbing and burglary of a local Jewish leader i… [+3538 chars]"
        },
        {
          "source": { "id": null, "name": "Boston 25 News" },
          "author": "Jim Morelli",
          "title": "Mass. doctor ‘surreptitiously inserted’ his own sperm into IVF patient, lawsuit alleges - Boston 25 News",
          "description": "A longtime Massachusetts doctor has been sued by a former patient who alleges in a newly filed lawsuit that he secretly fathered her daughter after he “surreptitiously” inserted his sperm into her as she underwent an IVF treatment.",
          "url": "https://www.boston25news.com/news/local/mass-doctor-surreptitiously-inserted-his-own-sperm-into-insemination-patient-lawsuit-alleges/KGC4OPLWPVG2VN6O5CZIDALCHQ/",
          "urlToImage": "https://cmg-cmg-tv-10020-prod.cdn.arcpublishing.com/resizer/HoTWR8AEHOP768BhLSgoIDqAjis=/1440x810/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/cmg/CTY2KYPOSJFCPHWOTN6KL7KWSM.png",
          "publishedAt": "2023-12-14T13:23:08Z",
          "content": "BOSTON — A longtime Massachusetts doctor has been sued by a former patient who alleges in a newly filed lawsuit that he secretly fathered her daughter after he surreptitiously inserted his sperm into… [+5782 chars]"
        },
        {
          "source": { "id": null, "name": "CBS Sports" },
          "author": "",
          "title": "Draymond Green testing limits of Steph Curry's steadfast loyalty with latest incident, indefinite suspension - CBS Sports",
          "description": "Ultimately, Green's future in Golden State could lie in the hands of his longtime teammate",
          "url": "https://www.cbssports.com/nba/news/draymond-green-testing-limits-of-steph-currys-steadfast-loyalty-with-latest-incident-indefinite-suspension/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/12/14/0ab67b94-1410-4f30-b7ce-c4e6cd52be7b/thumbnail/1200x675/4ce21e8cce3b6d9bbe59306021eac479/121323-stephcurrydraymondgreen.jpg",
          "publishedAt": "2023-12-14T13:17:00Z",
          "content": "For 12 years, four titles, and countless obstacles both on and off the court, Stephen Curry, Draymond Green and Klay Thompson have looked the modern sports landscape dead in the eyes and sent it whim… [+4450 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Clarissa Ward, Rachel Clarke",
          "title": "Looking into the eyes of an orphan in Gaza - CNN",
          "description": "Amid Gaza’s devastation and soaring death toll, medical volunteers in a field hospital in a soccer stadium try to save lives during Israeli airstrikes.",
          "url": "https://www.cnn.com/2023/12/14/middleeast/gaza-orphan-israel-hamas-war/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231213192118-06-field-hospital-young-victims-gaza.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-12-14T13:11:00Z",
          "content": "20-month-old Amir Taha lies silently on the bed his fluffy hair sticking up, his baby soft skin violated by a raw, jagged wound across his forehead. Purple bruises swell around one of his big brown e… [+7192 chars]"
        },
        {
          "source": { "id": "ars-technica", "name": "Ars Technica" },
          "author": "Eric Berger",
          "title": "Daily Telescope: How small can the smallest star be? - Ars Technica",
          "description": "So tiny you can barely see it.",
          "url": "https://arstechnica.com/space/2023/12/daily-telescope-how-small-can-the-smallest-star-be/",
          "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/12/Star_Cluster_IC_348_NIRCam_image-760x380.jpg",
          "publishedAt": "2023-12-14T13:00:58Z",
          "content": "Enlarge/ This image from the NIRCam on the James Webb Space Telescope shows the central portion of the star cluster IC 348.\r\n20\r\nWelcome to the Daily Telescope. There is a little too much darkness in… [+1813 chars]"
        },
        {
          "source": { "id": null, "name": "Page Six" },
          "author": "Francesca Bacardi",
          "title": "Madonna angers fans by starting US kickoff tour performance 3 hours late: 'F--king rude' - Page Six",
          "description": "“I love Madonna but it’s really f–ked up how she’s literally like 2 hours late for her FIRST show in the us,” tweeted one fan.",
          "url": "https://pagesix.com/2023/12/14/entertainment/madonna-angers-fans-by-starting-us-kickoff-tour-performance-3-hours-late/",
          "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2023/12/73729396.jpg?quality=75&strip=all&w=1024",
          "publishedAt": "2023-12-14T12:53:00Z",
          "content": "She may have had “4 Minutes” to save the world but she took three hours to prepare for a concert.\r\nMadonna upset her devoted fans Wednesday night by kicking off her Celebration tour hours later than … [+2341 chars]"
        },
        {
          "source": { "id": "nbc-news", "name": "NBC News" },
          "author": "Patrick Smith",
          "title": "13-year-old boy accused of planning mass shooting at Ohio synagogue - NBC News",
          "description": "A 13-year-old boy has been arrested and accused of planning a mass shooting at a synagogue in Ohio, court documents show.",
          "url": "https://www.nbcnews.com/news/us-news/13-year-old-boy-accused-planning-mass-shooting-ohio-synagogue-rcna129689",
          "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-12/231214-temple-israel-canton-mb-0957-4b16e4.jpg",
          "publishedAt": "2023-12-14T12:49:22Z",
          "content": "A 13-year-old boy has been arrested and accused of planning a mass shooting at a synagogue in Ohio, court documents show.\r\nThe suspect, who cannot be named for legal reasons, is charged with inducing… [+2218 chars]"
        },
        {
          "source": { "id": null, "name": "BBC News" },
          "author": null,
          "title": "Geminid meteor shower to light up night sky - BBC.com",
          "description": "One of the year's most reliable meteor showers peaks on Thursday night and Friday morning.",
          "url": "https://www.bbc.com/news/science-environment-67658650",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1158D/production/_132035017_meteor1-gettyimages-1362664347.jpg",
          "publishedAt": "2023-12-14T12:28:00Z",
          "content": "By Maddie MolloyBBC News Climate &amp; Science\r\nThe Geminids can be seen each year in mid-December\r\nThe Geminids meteor shower, famous for its multicoloured streaks of light across the night sky, is … [+3957 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Annie Grayer",
          "title": "House votes to formalize impeachment inquiry into President Joe Biden with floor vote - CNN",
          "description": "House Republicans voted Wednesday to formalize an impeachment inquiry into President Joe Biden as their investigation reaches a critical juncture and right-wing pressure grows.",
          "url": "https://www.cnn.com/2023/12/13/politics/house-impeachment-inquiry-joe-biden/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/mike-johnson-joe-biden.JPG?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-12-14T12:19:00Z",
          "content": "House Republicans voted Wednesday to formalize an impeachment inquiry into President Joe Biden as their investigation reaches a critical juncture and right-wing pressure grows.\r\nIn a 221-212 vote, al… [+7843 chars]"
        },
        {
          "source": { "id": null, "name": "Electrek" },
          "author": "Jennifer Mossalgue",
          "title": "GM fires 9 execs at Cruise, may face $1.5 million in fines - Electrek.co",
          "description": "General Motors has laid off “nine key people” at robotaxi company Cruise amid the fallout from the accident involving a pedestrian in San Francisco. The incident already forced the company’s CEO Kyle Vogt to resign.",
          "url": "https://electrek.co/2023/12/14/gm-fires-9-execs-at-cruise-may-face-1-5-million-in-fines/",
          "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/09/Cruise-Austin-traffic-jam.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2023-12-14T11:31:00Z",
          "content": "General Motors has fired nine key people at robotaxi company Cruise amid the fallout from an accident involving a pedestrian in San Francisco. The incident and the uncovered details that have dealt a… [+2526 chars]"
        },
        {
          "source": { "id": null, "name": "Eonline.com" },
          "author": "Lindsay Weinberg",
          "title": "How Taylor Swift Celebrated Enchanting Birthday Without Travis Kelce - E! NEWS",
          "description": "Even without boyfriend Travis Kelce by her side, Taylor Swift was made of starlight, starlight on her 34th birthday as she stepped out with Blake Lively in New York City.",
          "url": "https://www.eonline.com/news/1391449/how-taylor-swift-celebrated-her-enchanting-birthday-without-travis-kelce",
          "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/20231113/cr_1200x1200-231213182426-BLU_A90603068.jpeg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
          "publishedAt": "2023-12-14T11:20:09Z",
          "content": "Karma Is the Guy on the Chiefs...Once her split from actor Joe Alwyn after six year together was confirmed in April, Kansas City Chiefs tight end Travis Kelce was ready to shoot his shot with the sup… [+1260 chars]"
        },
        {
          "source": { "id": "ign", "name": "IGN" },
          "author": "Wesley Yin-Poole",
          "title": "The Boss of Baldur’s Gate 3 Dev Larian Reveals What He Wanted to Say at The Game Awards 2023 - IGN",
          "description": "Here's the Baldur's Gate 3 Game of the Year award acceptance speech Larian boss Swen Vincke didn't have time to say.",
          "url": "https://www.ign.com/articles/the-boss-of-baldurs-gate-3-dev-larian-reveals-what-he-wanted-to-say-at-the-game-awards-2023",
          "urlToImage": "https://assets-prd.ignimgs.com/2023/12/14/screenshot-2023-12-14-104931-1702550979512.png?width=1280",
          "publishedAt": "2023-12-14T11:08:33Z",
          "content": "When an armour-clad Swen Vincke, boss of Baldur's Gate 3 developer Larian Studios, accepted the award for Game of the Year at The Game Awards 2023, he had just 30 seconds before the dreaded please wr… [+3446 chars]"
        },
        {
          "source": { "id": null, "name": "Euronews" },
          "author": null,
          "title": "Spanish scientist's help key to overturning conviction of Australia's 'worst female serial killer' - Euronews",
          "description": "Kathleen Folbigg and her legal team are now seeking 'substantial' compensation from the state government for the years she has spent in prison.",
          "url": "https://www.euronews.com/2023/12/14/spanish-scientists-help-key-to-overturning-conviction-of-australias-worst-female-serial-ki",
          "urlToImage": "https://static.euronews.com/articles/stories/08/10/98/04/1200x675_cmsv2_0ae0a3fe-b5d4-557e-80ea-c466a0bc7e0f-8109804.jpg",
          "publishedAt": "2023-12-14T11:07:24Z",
          "content": "Kathleen Folbigg and her legal team are now seeking 'substantial' compensation from the state government for the years she has spent in prison.\r\n Twenty years after a jury found Kathleen Folbigg guil… [+4248 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Matias Grez",
          "title": "Giannis Antetokounmpo drops career-high 64 points as post-game scuffle mars Milwaukee Bucks victory over the Indiana Pacers - CNN",
          "description": "Giannis Antetokounmpo was involved in a heated post-match altercation with the Indiana Pacers after dropping a career-high and Bucks franchise-record 64 points in Milwaukee’s 140-126 victory on Wednesday.",
          "url": "https://www.cnn.com/2023/12/14/sport/giannis-antetokounmpo-career-high-milwaukee-bucks-indiana-pacers-spt-intl/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231214094616-02-giannis-antetokounmpo-121323.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-12-14T10:27:00Z",
          "content": "Giannis Antetokounmpo was involved in a heated post-match altercation with the Indiana Pacers after dropping a career-high and Bucks franchise-record 64 points in Milwaukees 140-126 victory on Wednes… [+2304 chars]"
        }
    ]
    constructor(){
        super();
        this.state={
            articles:this.articles,
            loading : false
        }
    }    END HERE    */ 

    static defaultProps={
      pageSize:9,
      category:'general'
    }
    static propTypes ={
      pageSize: PropTypes.number,
      category: PropTypes.string
    }
    titleCase=(str)=> {
      return str.toLowerCase().split(' ').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
      }).join(' ');
    }
    constructor(props){    //props here becuase i am using document.title=`SherryNews-${this.titleCase(this.props.category)} otherwise not needed
        super(props);
        this.state={
            articles:[],
            loading : false,
            page : 1
        }
        document.title=`SherryNews-${this.titleCase(this.props.category)}`
    }
    async componentDidMount() {
      let url = `https://newsdata.io/api/1/news?apikey=${this.props.apiKey}&q=${this.props.category}&size=${this.props.pageSize}`;
  
      this.setState({ loading: true });
  
      try {
          let data = await fetch(url);
          let parsedData = await data.json();
  
          if (parsedData.status === "success") {
              this.setState({
                  articles: parsedData.results,
                  totalResults: parsedData.totalResults,
                  loading: false
              });
          } else {
              throw new Error("Failed to fetch news");
          }
      } catch (error) {
          console.error("Error fetching news:", error);
          this.setState({ loading: false });
      }
  }
  

    /* If I had used react functional components then I would have to use useState hook for changing states which is very easy and useEffect hook for function of componentDidMount() function but function with a different name. it's usage is as:
    useEffect(()=>{
      document.title=`SherryNews-${this.titleCase(this.props.category)}`
      componentDidMount()   //change this function to anohter function name but same functionality
    },[])*/

    handleNextClick = async ()=>{
        this.setState({page:this.state.page+1})
        this.componentDidMount()
      }
    handlePrevClick = async()=>{
      this.setState({page:this.state.page-1})
      this.componentDidMount()
      }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='my-3'style={{border:'solid 1px',padding:'10px'}}>SherryNews - Top {this.titleCase(this.props.category)} Headlines</h2>
        {this.state.loading && < Loading/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.article_id}>
                <NewsItem title={element.title?element.title:'...'} description={element.description?element.description:'...'} imgUrl={element.image_url?element.image_url:"https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"} newsUrl={element.link} author={element.creator} time={element.pubDate}/>
                </div>
            })}
        </div>

        <div className="container d-flex justify-content-between my-4">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page >= Math.ceil((this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          
        </div>
        
        
      </div>
    )
  }
}

export default News