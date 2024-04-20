import NavBar from '../components/NavBar'
import NewsDisplay from '../components/RSSFeed';
import Footer from '../components/Footer';

function MenstrupediaPage() {
    const rssFeedUrl = 'https://pubmed.ncbi.nlm.nih.gov/rss/search/1BId5KLeXKM7WpiBSALnPF4kNZvBzLIAE-dShHPw-9uthUuUFw/?limit=15&utm_campaign=pubmed-2&fc=20240418053708'; // Replace with your RSS feed URL
  return (
    <div style={{background: '#FFD8DF', margin:0, padding:0, boxSizing:'border-box', minHeight:'100vh', color:'black'}}>
    <NavBar/>
    <NewsDisplay/>
    <Footer></Footer>
    </div>
  )
}

export default MenstrupediaPage