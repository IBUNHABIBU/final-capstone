import React from 'react';

const Home = () => {
  const [tab, setTab] = useState(1);
  const toggleTab = (index) => {
    setTab(index);
  };
  return (
    <div>
      <div className="d-flex align-items-start">
        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button onClick={() => toggleTab(1)} className={tab == 1 ? 'nav-link active' : 'nav-link'} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
          <button onClick={() => toggleTab(2)} className={tab == 2 ? 'nav-link active' : 'nav-link'} id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
          <button onClick={() => toggleTab(3)} className={tab == 3 ? 'nav-link active' : 'nav-link'} id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
          <button onClick={() => toggleTab(4)} className={tab == 4 ? 'nav-link active' : 'nav-link'} id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
            ...
            Lorem ipsum dolor sit amet consectetur, adipisicing e
            lit. Iste optio in, nihil quasi esse quaerat dicta nobis delectus aliquid neque rem
            cupiditate cum officia autem sit! Cupiditate repellat vitae aut.
          </div>
          <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
          <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
          <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
        </div>
      </div>

    </div>
  );
};
export default Home;
