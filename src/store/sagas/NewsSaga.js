import {takeLatest, put, call} from 'redux-saga/effects'
import Actions from '../actions'

function * getList({payload}) {
    try {
        let list = [
            {
                id:1,
                title:"PH among the last in Asia Pacific to recover from pandemic-induced slump – Moody's Analytics",
                by:'Rick Sanchez',
                published_date: '10 minutes ago',
                thumbnail:'https://www.cnnphilippines.com/.imaging/mte/demo-cnn-new/750x450/dam/cnn/2020/7/14/Covid-19-Cebu-0714_CNNPH.jpg/jcr:content/Covid-19-Cebu-0714_CNNPH.jpg',
                description:"The Philippines will be among the last across Asia-Pacific to restore its vibrant pre-pandemic economy, with Moody's Analytics seeing a full recovery only by late 2022. In a report published Thursday, the research unit of credit rater Moody's Investors Service said that while the region is leading the growth rebound globally, nations are on different stages of recovery"
            },
            {
                id:2,
                title:"Warriors fear Klay Thompson has ‘significant Achilles injury’ – reports",
                by:'Tricia Takanawa',
                published_date: '2 days ago',
                thumbnail:'https://sports.inquirer.net/files/2019/06/AP19155730272525.jpg',
                description:"Golden State Warriors All-Star shooting guard Klay Thompson is awaiting tests to determine the severity of a right leg injury the team reportedly fears is a “significant Achilles injury.”\n\nAccording to multiple reports, Thompson has a lower-leg injury and was injured Wednesday in a pickup game. Thompson, per The Athletic, was unable to place any weight on his right leg after he was hurt. ESPN cited a source that described the injury as “not good.”"
            },
            {
                id:3,
                title:"Meet Iain Armitage, the 12-year-old star of 'Young Sheldon'",
                by:'Tom Tucker',
                published_date: 'a week ago',
                thumbnail:'https://sa.kapamilya.com/absnews/abscbnnews/media/2020/news/11/19/sheldon.jpg',
                description:"Its lead star, 12-year-old Iain Armitage, continues to shine as the titular character Sheldon Cooper. Not only does he capture Sheldon’s well-known quirks (with some pointers from Jim Parsons during season 1), he has also made the role his own, turning the Sheldon Cooper we’ve known for years into this new, exciting and, most importantly, funny character. It’s even more mind-blowing to realize that Armitage has played this role without even seeing the source material in full (and only some clips), since it wasn’t age appropriate for him to watch it. "
            },
            {
                id:4,
                title:'Duterte ’not plastic,’ ‘consistent’ on remarks vs Robredo — Palace',
                by:'Rick Sanchez',
                published_date: '10 minutes ago',
                thumbnail:'https://d2kf8ptlxcina8.cloudfront.net/XBXFQOBDKM-preview.png'
            },
            {
                id:5,
                title:'EO for emergency use of COVID-19 vaccines in PH ‘approved in principle’',
                by:'Tricia Takanawa',
                published_date: '2 days ago',
                thumbnail:'https://image.shutterstock.com/image-vector/breaking-news-concept-design-template-260nw-1012866391.jpg'
            },
            {
                id:6,
                title:'House panel OKs bill seeking to modernize BI',
                by:'Tom Tucker',
                published_date: 'a week ago',
                thumbnail:'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/SKD-bqAkQjhvrjayf/videoblocks-news-intro-graphic-animation-with-circles-and-world-map-abstract-background-elegant-and-luxury-dynamic-style-for-news-and-business-template_bzal6tytb_thumbnail-180_01.jpg'
            }
        ]

        yield put(Actions.Creators.setNewsList(list))
    }
    catch(err) {
        alert(err)
    }

    yield put(Actions.Creators.doneAttemptGetNewsList())
}

export default function * handler() {
    yield takeLatest(Actions.Types.ATTEMPT_GET_NEWS_LIST, getList)
}