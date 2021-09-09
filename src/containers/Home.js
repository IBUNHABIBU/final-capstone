import React from 'react';
import TabButton from '../components/TabButton';

const Home = () => (
  <div>
    <h1>Logo </h1>
    <div className="d-flex align-items-start">
      <div className="nav flex-column nav-pills me-3 navi-bar" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        {/* <button onClick={() => toggleTab(1)} className={tab === 1 ? 'nav-link active' : 'nav-link'} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Models</button>
          <button onClick={() => toggleTab(2)} className={tab === 2 ? 'nav-link active' : 'nav-link'} id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Lifestyle</button>
          <button onClick={() => toggleTab(3)} className={tab === 3 ? 'nav-link active' : 'nav-link'} id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Shop</button>
          <button onClick={() => toggleTab(4)} className={tab === 4 ? 'nav-link active' : 'nav-link'} id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">TestDrive</button> */}
        <TabButton index={1} tab={1} content="Home" />
      </div>
      <div className="tab-content" id="v-pills-tabContent">
        <div className={tab === 1 ? 'tab-pane fade show active' : 'tab-pane fade'} id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
          ...
          Lorem ipsum dolor sit amet consectetur, adipisicing e
          lit. Iste optio in, nihil quasi esse quaerat dicta nobis delectus aliquid neque rem
          cupiditate cum officia autem sit! Cupiditate repellat vitae aut.
        </div>
        <div className={tab === 2 ? 'tab-pane fade show active' : 'tab-pane fade'} id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Lorem 2 lorem ljadli liedlie *</div>
        <div className={tab === 3 ? 'tab-pane fade show active' : 'tab-pane fade'} id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">ldiedkaa ia laie adlaie aidioae</div>
        <div className={tab === 4 ? 'tab-pane fade show active' : 'tab-pane fade'} id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...ldidaieakdaieoalkaielaiela</div>
      </div>
    </div>

  </div>
);
export default Home;
