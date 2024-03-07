import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className='container mt-4 '>
        <div className='jumbotron'>
          <h1 className='display-4'>Welcome to SherryNews</h1>
          <p className='lead'>
            Your digital gateway to a world of information, where every headline is a story waiting to be explored.
          </p>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <p>
              At SherryNews, we take pride in curating a diverse tapestry of news that transcends boundaries—bringing you
              the latest and most compelling stories from the realms of politics, weather, finance, sports, and beyond.
            </p>
            <p>
              Our mission is simple yet profound: to keep you not just informed, but captivated. In a fast-paced world
              where every moment counts, SherryNews serves as your steadfast companion, delivering a comprehensive blend
              of breaking news, insightful analyses, and thought-provoking features. We understand that the news is not
              just a collection of facts; it's a narrative that shapes our understanding of the world.
            </p>
          </div>
        </div>
        <div className='row'>
            <div className="col-md-8">
            <p>
            Dive into the heart of political landscapes, where decisions shape nations and stories unfold in the corridors of power. Stay ahead of the weather curve with our up-to-the-minute forecasts, ensuring you're prepared for whatever nature has in store. Navigate the intricate web of financial markets, staying informed about economic trends and developments that impact your world.
            </p>
            </div>
        </div>
        
      </div>
    );
  }
}

export default About;
