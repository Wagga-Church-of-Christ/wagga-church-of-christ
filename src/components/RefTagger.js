import React from 'react'

let urlMap = {
  "Gen": 'GN',
  "Exod": 'EX',
  "Lev": 'LV',
  "Num": 'NU',
  "Deut": 'DT',
  "Josh": 'JS',
  "Judg": 'JG',
  "Ruth": 'RT',
  "1 Sam": 'S1',
  "2 Sam": 'S2',
  "1 Kings": 'K1',
  "2 Kings": 'K2',
  "1 Chron": 'R1',
  "2 Chron": 'R2',
  "Ezra": 'ER',
  "Neh": 'NH',
  "Esther": 'ET',
  "Job": 'JB',
  "Ps": 'PS',
  "Prov": 'PR',
  "Eccles": 'EC',
  "Song": 'SS',
  "Isa": 'IS',
  "Jer": 'JR',
  "Lam": 'LM',
  "Ezek": 'EK',
  "Dan": 'DN',
  "Hos": 'HS',
  "Joel": 'JL',
  "Amos": 'AM',
  "Obad": 'OB',
  "Jonah": 'JH',
  "Micah": 'MC',
  "Nah": 'NM',
  "Hab": 'HK',
  "Zeph": 'ZP',
  "Haggai": 'HG',
  "Zech": 'ZC',
  "Mal": 'ML',
  "Matt": 'MT',
  "Mark": 'MK',
  "Luke": 'LK',
  "John": 'JN',
  "Acts": 'AC',
  "Rom": 'RM',
  "1 Cor": 'C1',
  "2 Cor": 'C2',
  "Gal": 'GL',
  "Eph": 'EP',
  "Phil": 'PP',
  "Col": 'CL',
  "1 Thess": 'H1',
  "2 Thess": 'H2',
  "1 Tim": 'T1',
  "2 Tim": 'T2',
  "Titus": 'TT',
  "Philem": 'PM',
  "Heb": 'HB',
  "James": 'JM',
  "1 Pet": 'P1',
  "2 Pet": 'P2',
  "1 John": 'J1',
  "2 John": 'J2',
  "3 John": 'J3',
  "Jude": 'JD',
  "Rev": 'RV'
}

let window

if (window.refTagger === undefined) {
  window.refTagger = {
    settings: {
      bibleVersion: "NASB",			
      roundCorners: true,
      socialSharing: [],
      tagChapters: true,
      customStyle : {
        heading: {
          backgroundColor : "#28476b",
          color : "#ffffff"
        }
      }
    }
  };
}

// https://stackoverflow.com/a/47776379
function rafAsync() {
  return new Promise(resolve => {
      requestAnimationFrame(resolve); //faster than set time out
  });
}

async function isRefTaggerLoaded() {
  while (window.refTagger.tag === undefined) {
      await rafAsync()
  }
  return true;
}
  
// https://github.com/Faithlife/react-reftagger/blob/81e7868963972fcad4fcd828c345558c12750ce3/index.js
class RefTagger extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (document.getElementById("refTagger") === null) {
      this.addScript();
    }
    this.update();
  }

  componentDidUpdate(prevProps, prevState) {
    this.update();
  }

  update() {
    isRefTaggerLoaded()
    .then(() => {
      window.refTagger.tag()
      let bibleLinks = document.getElementsByClassName("rtBibleRef")

      for (let link of bibleLinks) {
        let verseReference = link.href.substring(link.href.lastIndexOf('/')+1);
        let lastSpaceRef = verseReference.lastIndexOf('%20')
        let book = verseReference.substring(0, lastSpaceRef)
        let chapterVerse = verseReference.substring(lastSpaceRef+3)
  
        let lastDotRef = chapterVerse.lastIndexOf('.')
        let verse
        let chapter
  
        if (lastDotRef === -1) {
          verse = 1
          chapter = chapterVerse
        } else {
          chapter = chapterVerse.substring(0, lastDotRef)
          let lastDashRef = chapterVerse.lastIndexOf('-')
  
          if (lastDashRef === -1) {
            verse = chapterVerse.substring(lastDotRef+1)
          } else {
            verse = chapterVerse.substring(lastDotRef+1, lastDashRef)
          }
        }
  
        book = book.replace('%20', ' ')
        book = book.replace(/[^1-3a-z ]/gi, '')
  
        let newBookRef = urlMap[book]
  
        let newURL = `http://biblewebapp.com/study/?w1=bible&v1=${newBookRef}${chapter}_${verse}`
        link.href = newURL
      }
    });
  }

  addScript() {
    var el, s;
    el = document.createElement('script');
    el.type = 'text/javascript';
    el.async = true;
    el.src = 'https://api.reftagger.com/v2/RefTagger.js';
    el.id = 'refTagger'
    s = document.getElementsByTagName('script')[0];
    return s.parentNode.insertBefore(el, s);
  }

  render() {
    return <div></div>;
  }
};

export default RefTagger