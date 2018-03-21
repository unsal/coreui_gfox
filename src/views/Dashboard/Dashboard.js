import React, { Component } from 'react';
import { Jumbotron, Button, Media } from 'reactstrap';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">GFox GDPR v1.o</h1>
          <p className="lead">GFox bir Mevzuat Uyumluluk İşletimi Yazılımıdır</p>
          <hr className="my-2" />
          <p>Daha fazlası için lütfen yazılımın sağını solunu gönül rahatlığı ile kurcalayınız.</p>
          <p className="lead">
            <Button color="primary">Devam</Button>
          </p>

        </Jumbotron>
    </div>
    )
  }
}

export default Dashboard;
