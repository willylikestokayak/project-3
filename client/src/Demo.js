import React, {Component} from 'react';
import { Carousel } from 'react-materialize';
import $ from 'jquery';

class Demo extends Component {
    render(){
        return(

              // <Carousel>
                <div>
                  <h4>Welcome to WYM.</h4>
                  <p>[Filler copy/not final] WYM uses the Watson tone analyzer API to help you detect tone in your written text. Get started by following the steps below.</p>
                <Carousel images={[
'http://images.archant.co.uk/polopoly_fs/1.4371969.1452244455!/image/image.jpg_gen/derivatives/landscape_630/image.jpg',
'http://images.archant.co.uk/polopoly_fs/1.4371969.1452244455!/image/image.jpg_gen/derivatives/landscape_630/image.jpg',
'http://images.archant.co.uk/polopoly_fs/1.4371969.1452244455!/image/image.jpg_gen/derivatives/landscape_630/image.jpg',
'http://images.archant.co.uk/polopoly_fs/1.4371969.1452244455!/image/image.jpg_gen/derivatives/landscape_630/image.jpg',
'http://images.archant.co.uk/polopoly_fs/1.4371969.1452244455!/image/image.jpg_gen/derivatives/landscape_630/image.jpg'
]} />
                </div>
              //   <div>
              //     <img src="http://images.archant.co.uk/polopoly_fs/1.4371969.1452244455!/image/image.jpg_gen/derivatives/landscape_630/image.jpg" />
              //     <p className="legend">Caption 2</p>
              //   </div>
              //   <div>
              //     <img src="http://images.archant.co.uk/polopoly_fs/1.4371969.1452244455!/image/image.jpg_gen/derivatives/landscape_630/image.jpg" />
              //     <p className="legend">Caption 3</p>
              //   </div>
              //   <div>
              //     <img src="http://images.archant.co.uk/polopoly_fs/1.4371969.1452244455!/image/image.jpg_gen/derivatives/landscape_630/image.jpg" />
              //     <p className="legend">Caption 4</p>
              //   </div>
              //   <div>
              //     <img src="http://images.archant.co.uk/polopoly_fs/1.4371969.1452244455!/image/image.jpg_gen/derivatives/landscape_630/image.jpg" />
              //     <p className="legend">Caption 5</p>
              //   </div>
              // </Carousel>

        );
    }
}

export default Demo;
