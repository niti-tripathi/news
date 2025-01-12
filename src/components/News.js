import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Variety"
            },
            "author": "Rebecca Rubin",
            "title": "‘Five Nights at Freddy’s’ Box Office: All the Records Shattered in Opening Weekend - Variety",
            "description": "Here are all the box office records set by 'Five Nights at Freddy's' in its opening weekend.",
            "url": "https://variety.com/2023/film/news/five-nights-at-freddys-box-office-opening-weekend-records-1235772394/",
            "urlToImage": "https://variety.com/wp-content/uploads/2023/10/five-nights-at-freddys-fazbear.jpg?w=1000&h=563&crop=1",
            "publishedAt": "2023-10-29T19:20:00Z",
            "content": "“Five Nights at Freddy’s,” Universal and Blumhouse‘s terrifying adaptation of the popular video game, made a killing in its box office debut with $78 million in North America and $130 million globall… [+4712 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "DeSantis offers to boost security after multiple people killed or wounded in Tampa shooting - POLITICO",
            "description": "As governor, DeSantis has generally opposed proposals seeking to restrict access to guns.",
            "url": "https://www.politico.com/news/2023/10/29/desantis-tampa-shooting-00124128",
            "urlToImage": "https://static.politico.com/bb/93/c5f2bfc5418086b710dba832d178/ybor-city-shooting-52526.jpg",
            "publishedAt": "2023-10-29T19:16:11Z",
            "content": "In the aftermath of the Maine shooting, DeSantis, who is running for president, said more people with serious mental health issues should be institutionalized against their will as a way to prevent m… [+2052 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WLWT Cincinnati"
            },
            "author": "Fletcher Keel",
            "title": "Bengals, 49ers announce inactive players ahead of Week 8 matchup - WLWT Cincinnati",
            "description": "The Cincinnati Bengals will face a San Francisco 49ers offense at mostly full strength, with a couple of key figures active for Sunday's bout.",
            "url": "https://www.wlwt.com/article/cincinnati-bengals-san-francisco-49ers-inactives-week-8-2023/45675515",
            "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/gettyimages-1754969601-6539787ebdb2d.jpg?crop=1.00xw:0.846xh;0,0.0171xh&resize=1200:*",
            "publishedAt": "2023-10-29T18:58:00Z",
            "content": "SANTA CLARA, Calif. —The Cincinnati Bengals will face a San Francisco 49ers offense at mostly full strength, with a couple of key figures active for Sunday's bout. \r\nThis content is imported from Twi… [+1367 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Times of Israel"
            },
            "author": null,
            "title": "‘Stop the massacre’: Pro-Palestinian, anti-Israel protests draw large crowds wordwide - The Times of Israel",
            "description": "Demonstrations in New York, Pakistan, Greece, Madrid, Morocco are attended by tens of thousands, as Jews face dramatic rise in antisemitism",
            "url": "https://www.timesofisrael.com/stop-the-massacre-pro-palestinian-protests-draw-thousands-around-the-world/",
            "urlToImage": "https://static.timesofisrael.com/www/uploads/2023/10/AP23301849099034-1024x640.jpg",
            "publishedAt": "2023-10-29T18:56:15Z",
            "content": "Thousands of pro-Palestinian protesters poured onto the streets of Brooklyn, New York’s largest borough, on Saturday to voice their opposition to Israel’s ongoing war with Hamas in Gaza, which entere… [+7334 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "Jeff Kerr",
            "title": "Commanders vs. Eagles score: Live updates, highlights, analysis, TV, streaming for NFC East showdown in Week 8 - CBS Sports",
            "description": "Jones made his one catch count in getting the Eagles to 7-1",
            "url": "https://www.cbssports.com/nfl/news/commanders-vs-eagles-score-julio-jones-fourth-quarter-td-keys-philadelphias-shootout-win/live/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/10/29/8cfff5c0-3a1a-49b4-a8ef-c4351ba84e8c/thumbnail/1200x675/3a99f1746902d1178ab5f138b6387fa8/julio-jpeg.jpg",
            "publishedAt": "2023-10-29T18:52:33Z",
            "content": "LANDOVER, Md. -- Just two games into his Philadelphia Eagles career, Julio Jones showcased the greatness that made him a future Hall of Fame receiver. Jones caught the go-ahead touchdown pass in the … [+1254 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": null,
            "title": "U.N. aid warehouses looted in Gaza as Netanyahu declares \"second phase\" in war - CBS News",
            "description": "The Israeli military said Sunday it had struck over 450 militant targets over the past 24 hours.",
            "url": "https://www.cbsnews.com/news/gaza-un-warehouses-looted-second-phase-in-war-israel/",
            "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/10/29/a45e5db4-ae43-4631-861f-e28a0ce41c34/thumbnail/1200x630/39a58010d835dfe2eb5464e452021286/2023-10-13t053704z-376179275-rc2dr3akr1g7-rtrmadp-3-israel-palestinians-gaza-un-convoy.jpg?v=5799c2de91a486f8a37c0b0f0daf468a",
            "publishedAt": "2023-10-29T18:43:00Z",
            "content": "Thousands of people broke into aid warehouses in Gaza to take flour and basic hygiene products, a U.N. agency said Sunday, in a mark of growing desperation and the breakdown of public order three wee… [+8232 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Todd Archer",
            "title": "Cowboys score offensive, defensive TDs, then tack on a safety vs. Rams - ESPN - ESPN",
            "description": "The Cowboys racked up points from all angles early in Sunday's game, including a safety off a blocked punt.",
            "url": "https://www.espn.com/nfl/story/_/id/38772036/cowboys-dak-prescott-jake-ferguson-td-rams",
            "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1029%2Fr1245462_1296x729_16%2D9.jpg",
            "publishedAt": "2023-10-29T18:26:18Z",
            "content": "ARLINGTON, Texas -- Just 16 minutes, 21 seconds into Sunday's game against the Los Angeles Rams, the Dallas Cowboys had points from their offense, defense and special teams.\r\nOne was expected: tight … [+2603 chars]"
        },
        /* {
             "source": {
                 "id": null,
                 "name": "[Removed]"
             },
             "author": null,
             "title": "[Removed]",
             "description": "[Removed]",
             "url": "https://removed.com",
             "urlToImage": null,
             "publishedAt": "1970-01-01T00:00:00Z",
             "content": "[Removed]"
         },*/
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Kurt Knutsson, CyberGuy Report",
            "title": "How exactly does my private information get on 'people search' sites - Fox News",
            "description": "People-search sites, where users can find someone's personal information, have been able to obtain more and more data. Here's how you can protect yourself.",
            "url": "https://www.foxnews.com/tech/how-exactly-private-information-get-people-search-sites",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/10/google-2.jpg",
            "publishedAt": "2023-10-29T18:02:00Z",
            "content": "We live in a time when we are constantly worried about our safety and privacy while searching the internet. Particularly knowing that we have entered our contact and financial information on multiple… [+8055 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Flying In Martian Sky, A NASA Chopper Made By An Indian - NDTV",
            "description": "US space agency NASA is flying an aircraft -- a helicopter capable of flying in alien atmosphere -- in Mars.",
            "url": "https://www.ndtv.com/india-news/flying-in-martian-sky-a-nasa-chopper-made-by-an-indian-4525965",
            "urlToImage": "https://c.ndtvimg.com/2023-10/nsia1da4_dr-j-bob-balaram_625x300_29_October_23.jpg",
            "publishedAt": "2023-10-29T17:46:00Z",
            "content": "US space agency NASA is flying an aircraft -- a helicopter capable of flying in alien atmosphere -- in Mars. The 1.8 kg chopper, called Ingenuity, nicknamed \"Ginny\", is part of NASA's Perseverance ro… [+2781 chars]"
        },
        /* {
             "source": {
                 "id": null,
                 "name": "[Removed]"
             },
             "author": null,
             "title": "[Removed]",
             "description": "[Removed]",
             "url": "https://removed.com",
             "urlToImage": null,
             "publishedAt": "1970-01-01T00:00:00Z",
             "content": "[Removed]"
         },*/
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Bailey Schulz",
            "title": "S&P 500 and Nasdaq are in correction territory. What it means for you and your 401(k). - USA TODAY",
            "description": "The S&P 500 and Nasdaq Composite were in correction territory after dipping more than 10% from recent peaks. Will the stock market recover?",
            "url": "https://www.usatoday.com/story/money/2023/10/29/stock-market-correction-territory-meaning/71349135007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/10/27/USAT/71350613007-afp-afp-33-y-297-k.jpg?crop=7720,4345,x4,y244&width=3200&height=1802&format=pjpg&auto=webp",
            "publishedAt": "2023-10-29T16:40:30Z",
            "content": "If you're taking a fearful peek at your 401(k) following the stock market's recent plunge, you're not alone.\r\nThe S&amp;P 500 ended last week down more than 10% from its most recent high in July, whi… [+3254 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Hospital authorities say they have received five warnings it will be bombed imminently - Al Jazeera English",
            "description": "Al Jazeera’s Sohail Rahman spoke to Mads Gilbert, a Norweigan doctor who has worked in hospitals in Gaza and is in contact with his colleagues there. He reje...",
            "url": "https://www.youtube.com/watch?v=T_MoABonR1c",
            "urlToImage": "https://i.ytimg.com/vi/T_MoABonR1c/maxresdefault.jpg",
            "publishedAt": "2023-10-29T15:55:45Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Joseph White and David Shepardson",
            "title": "UAW leaders push ahead with Ford contract as GM talks drag - Yahoo Finance",
            "description": "DETROIT (Reuters) -United Auto Workers President Shawn Fain is meeting Sunday afternoon with local union leaders from Ford to start the process of ratifying ...",
            "url": "https://finance.yahoo.com/news/uaw-leaders-push-ahead-ford-153617472.html",
            "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/5c1c86544cd6b55721e4a5b9d669eead",
            "publishedAt": "2023-10-29T15:36:17Z",
            "content": "By Joseph White and David Shepardson\r\nDETROIT (Reuters) -United Auto Workers President Shawn Fain is meeting Sunday afternoon with local union leaders from Ford to start the process of ratifying a ne… [+4300 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "With Pence out, Christie predicts race will narrow further after third GOP debate - POLITICO",
            "description": "He praised Mike Pence for running \"a tough race.”",
            "url": "https://www.politico.com/news/2023/10/29/pence-christie-gop-debate-00124123",
            "urlToImage": "https://static.politico.com/ff/7c/4f42cf5a454d9d6a1634316c9d8f/election-2024-jewish-republicans-85302.jpg",
            "publishedAt": "2023-10-29T15:34:32Z",
            "content": "Christie is set to take the debate stage Nov. 8, alongside three fellow Republican presidential hopefuls Florida Gov. Ron DeSantis, entrepreneur Vivek Ramaswamy and former South Carolina Gov. Nikki H… [+810 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Moscow Times"
            },
            "author": "The Moscow Times",
            "title": "Anti-Israeli Mob Storms Airport in Russia's Dagestan - The Moscow Times",
            "description": "A mob of anti-Israeli protesters stormed an airport in the North Caucasus republic of Dagestan on Sunday night following calls on social media to block a flight from Tel Aviv from landing in the majority-Muslim region.",
            "url": "https://www.themoscowtimes.com/2023/10/29/anti-israeli-mob-storms-airport-in-russias-dagestan-a82926",
            "urlToImage": "https://static.themoscowtimes.com/image/og/0c/82926__0c95768126a246ed28e0843435b5f2b1.jpg",
            "publishedAt": "2023-10-29T15:12:00Z",
            "content": "A mob of anti-Israeli protesters stormed an airport in the North Caucasus republic of Dagestan on Sunday night following calls on social media to block a flight from Tel Aviv from landing in the majo… [+2568 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Action Network"
            },
            "author": "Prop Bet Guy",
            "title": "NFL Week 8 Player Props for Elijah Moore, Quincy Williams - The Action Network",
            "description": "PropBetGuy reveals his favorite picks for NFL Week 8 for Elijah Moore & Quincy Williams.",
            "url": "https://www.actionnetwork.com/nfl/nfl-week-8-player-props-elijah-moore-quincy-williams",
            "urlToImage": "https://images.actionnetwork.com/blog/2023/10/elijah-moore.jpg",
            "publishedAt": "2023-10-29T14:57:00Z",
            "content": "Quincy Williams Over 8.5 Tackles + Assists -120 | Play to -140\r\nJets vs. Giants | 1 p.m. ET\r\nIn his third season with the Jets, Quincy Williams has formed a dynamic off-ball linebacker duo with his c… [+2284 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Jose Devasia, Maria Ponnezhath, Chris Thomas",
            "title": "India police probe bomb that killed two in Kerala, injured dozens - Reuters India",
            "description": "A former member of the Jehovah's Witnesses group was detained for questioning about his alleged involvement in setting off homemade bombs at a meeting of the group in the southern Indian state of Kerala on Sunday, killing two women and injuring dozens of othe…",
            "url": "https://www.reuters.com/world/india/one-killed-several-injured-explosions-indias-southern-state-local-media-2023-10-29/",
            "urlToImage": "https://www.reuters.com/resizer/kqmNl78JDGxVNl-M5M-BFE1QQeQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PSXQXISTOJIIJLDOTQHUUBMKMQ.jpg",
            "publishedAt": "2023-10-29T14:34:00Z",
            "content": "KOCHI, India, Oct 29 (Reuters) - A former member of the Jehovah's Witnesses group was detained for questioning about his alleged involvement in setting off homemade bombs at a meeting of the group in… [+2762 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Discovering Uranus' Glow: New Hints for Life on Icy Exoplanets - SciTechDaily",
            "description": "University of Leicester astronomers confirm the existence of an infrared (IR) aurora on Uranus. The presence of an infrared aurora on the cold, outer planet of Uranus has been confirmed for the first time by University of Leicester astronomers. The discovery …",
            "url": "https://scitechdaily.com/?p=322736",
            "urlToImage": "https://scitechdaily.com/images/Uranus-Aurora.jpg",
            "publishedAt": "2023-10-29T14:31:04Z",
            "content": "ByUniversity of LeicesterOctober 29, 2023\r\nAn artistic representation of how the northern infrared aurora would have looked in 2006 (marked in red). The darker red locations indicate confirmed aurora… [+7707 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Space.com"
            },
            "author": "Mike Wall",
            "title": "SpaceX to launch 23 satellites tonight on 2nd half of Starlink doubleheader - Space.com",
            "description": "Liftoff is scheduled for 7:45 p.m. ET.",
            "url": "https://www.space.com/spacex-starlink-satellite-launch-group-6-25",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/iE768cuSgHaMuf8KTGKij8-1200-80.jpg",
            "publishedAt": "2023-10-29T14:00:58Z",
            "content": "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036."
        }
    ]

    static defaultProps = {
        country: "in",
        pageSize: 8,
        default: "general"

    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string

    }
    capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        console.log("hello i am an constructor");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
        document.title=`${this.capitalizeFirstLetter(this.props.category)}-News MOnkey`;
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6c0bf91e946a46d481f5af967a0fa414&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.State = ({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false });

    };

    async componentDidMount() {
        /* console.log("bhau");
         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6c0bf91e946a46d481f5af967a0fa414&page=1&pageSize=${this.props.pageSize}`;
         this.State = ({ loading: true });
         let data = await fetch(url);
         let parseData = await data.json();
         console.log(parseData);
         this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false });
 */
        this.updateNews();
    }

    handleNextClick = async () => {
        /*console.log("next");
         if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)))
         {
         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6c0bf91e946a46d481f5af967a0fa414&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
         this.setState({loading:true});
         let data=await fetch(url);
         let parseData= await data.json();
         console.log(parseData);
         this.setState({
             page:this.state.page+1,
             articles:parseData.articles,
             loading:false
         })
     }*/
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    };

    handlePrevClick = async () => {
        /*console.log("prev");
        console.log("bhau");
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6c0bf91e946a46d481f5af967a0fa414&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.State=({loading:true});
        let data=await fetch(url);
        let parseData= await data.json();
        console.log(parseData);
        this.setState({
            page:this.state.page-1,
            articles:parseData.articles,
            loading:false
        })*/
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    };
    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center my-3 text-decoration-underline" style={{ margin: '40px 20px' }}>{this.capitalizeFirstLetter(this.props.category)}</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((elements) => {
                        return <div className="col-md-4" key={elements.url}>
                            <NewsItem title={elements.title ? elements.title.slice(0, 30) : ""} description={elements.description ? elements.description.slice(0, 60) : ""} imageUrl={elements.urlToImage} newsUrl={elements.url} author={elements.author} date={elements.publishedAt} />
                        </div>
                    })}
                </div>
                <div className=" container d-flex justify-content-between my-4">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>next &rarr;</button>

                </div>

            </div>
        )
    }
}

export default News
