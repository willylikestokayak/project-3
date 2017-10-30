import React, {Component} from 'react';
import { Carousel, Slider, Slide } from 'react-materialize';
import $ from 'jquery';

class Demo extends Component {
    render(){
        return(

              // <Carousel>
                // <div>
                  // <h4>Welcome to WYM.</h4>
                  // <p>[Filler copy/not final] WYM uses the Watson tone analyzer API to help you detect tone in your written text. Get started by following the steps below.</p>
                  //
      	          //    <Carousel className="carousel" options={{ fullWidth: false }} images={[
                  //      'http://images.archant.co.uk/polopoly_fs/1.4371969.1452244455!/image/image.jpg_gen/derivatives/landscape_630/image.jpg',
                  //      'http://i.dailymail.co.uk/i/pix/2012/02/02/article-2095088-1178BD6E000005DC-983_468x560.jpg',
                  //      'http://images.archant.co.uk/polopoly_fs/1.4371969.1452244455!/image/image.jpg_gen/derivatives/landscape_630/image.jpg',
                  //      'http://images.archant.co.uk/polopoly_fs/1.4371969.1452244455!/image/image.jpg_gen/derivatives/landscape_630/image.jpg',
                  //      'http://images.archant.co.uk/polopoly_fs/1.4371969.1452244455!/image/image.jpg_gen/derivatives/landscape_630/image.jpg'
                  //    ]}
                  // />
                  <div className="demo">
                    <Slider>
                    	<Slide
                    		src="http://images.archant.co.uk/polopoly_fs/1.4371969.1452244455!/image/image.jpg_gen/derivatives/landscape_630/image.jpg"
                    		title="Welcome to WYM!">
                    		A tone analzyer app utilizing the IBM Watson API.
                    	</Slide>
                    	<Slide
                    		src="http://i.dailymail.co.uk/i/pix/2012/02/02/article-2095088-1178BD6E000005DC-983_468x560.jpg"
                    		title="Create an account to get started"
                    		placement="left">
                    	</Slide>
                    	<Slide
                    		src="http://www.lastwordonnothing.com/wp-content/uploads/2013/02/009azw4s1.jpg"
                    		title="Submit a text of your choice."
                    		placement="right">
                    		Receive immediate tone feedback on the text that you submit.
                    	</Slide>
                      <Slide
                    		src="http://www.lastwordonnothing.com/wp-content/uploads/2013/02/009azw4s1.jpg"
                    		title="Review your tone feedback."
                    		placement="left">
                    		Feedback is provided in helpful graphs and broken down line by line.
                    	</Slide>
                      <Slide
                    		src="http://www.lastwordonnothing.com/wp-content/uploads/2013/02/009azw4s1.jpg"
                    		title="Save your text for future reference."
                    		placement="right">
                    		Easily refer back to previous tone analysis by saving your submitted text to your profile.
                    	</Slide>
                      <Slide
                    		src="http://www.lastwordonnothing.com/wp-content/uploads/2013/02/009azw4s1.jpg"
                    		title="Perfect your twitter feed."
                    		placement="left">
                    		Perform a tone analysis on your entire twitter feed to fine tune your social media presence.
                    	</Slide>
                    </Slider>

                </div>




        );
    }
}

export default Demo;
