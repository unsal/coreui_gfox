import React, { Component } from 'react';
import { Jumbotron, Button, Media } from 'reactstrap';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <Jumbotron>
          {/* <h1 className="display-3">GFox GDPR v1.o</h1>
          <p className="lead">GFox bir Mevzuat Uyumluluk İşletimi Yazılımıdır</p>
          <hr className="my-2" />
          <p>Daha fazlası için lütfen yazılımın sağını solunu gönül rahatlığı ile kurcalayınız.</p>
          <p className="lead">
            <Button color="primary">Devam</Button>
          </p> */}

          <Media>
            <Media left href="#">
              <Media object data-src="gfox.png" alt="gfox" />
            </Media>
            <Media body>
              <Media heading>
                Media heading
              </Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
          </Media>

        </Jumbotron>
    </div>
    )
  }
}

export default Dashboard;
