import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TabButton = (props) => {
  const { index, btnNumber, content } = props;
  const [tab, setTab] = useState(1);
  const toggleTab = (index) => {
    setTab(index);
  };
  return (
    <div>
      <div className="d-flex align-items-start">
        <div className="nav flex-column nav-pills me-3 navi-bar" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button onClick={() => toggleTab(index)} className={tab === btnNumber ? 'nav-link active' : 'nav-link'} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">{content}</button>
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
};
TabButton.propTypes = {
  index: PropTypes.number.isRequired,
  btnNumber: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};
export default TabButton;
