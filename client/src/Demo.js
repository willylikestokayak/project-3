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
                  <div>
                    <Slider>
                    	<Slide
                    		src="http://images.archant.co.uk/polopoly_fs/1.4371969.1452244455!/image/image.jpg_gen/derivatives/landscape_630/image.jpg"
                    		title="Welcome to WYM!">
                    		Tone analyzing is super cool, yo.
                    	</Slide>
                    	<Slide
                    		src="http://i.dailymail.co.uk/i/pix/2012/02/02/article-2095088-1178BD6E000005DC-983_468x560.jpg"
                    		title="Look at this other slide!"
                    		placement="left">
                    		We have so many slides.
                    	</Slide>
                    	<Slide
                    		src="http://www.lastwordonnothing.com/wp-content/uploads/2013/02/009azw4s1.jpg"
                    		title="Another slide."
                    		placement="right">
                    		Who else has this many slides?
                    	</Slide>
                    </Slider>

                </div>




        );
    }
}

export default Demo;
