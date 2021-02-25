import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function Loading(props) {
  return <div id="axxAiLoading" className="axxAiLoadingHide">
      <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g class="ring">
        <circle id="Ellipse 89"  cx="34.5" cy="34.5" r="32.5" stroke="#E4EBF1" stroke-width="4"/>
        <path id="Ellipse 90" d="M67 34.5C67 38.768 66.1594 42.9941 64.5261 46.9372C62.8928 50.8803 60.4989 54.4631 57.481 57.481C54.4631 60.4989 50.8803 62.8928 46.9372 64.5261C42.9941 66.1594 38.768 67 34.5 67" stroke="#474D6B" stroke-width="4"/>
        </g>
    <g id="Union">
    <path d="M23.754 47.2001L27.6247 19.2699C27.6586 18.9765 28.0535 18.8975 28.2115 19.1571L34.4634 29.6295C34.5085 29.7085 34.5198 29.7988 34.4972 29.8778L30.6829 44.3225C30.6603 44.4127 30.6039 44.4805 30.5136 44.5256L24.2054 47.5274C23.9797 47.6402 23.7201 47.4484 23.754 47.2001Z" fill="#474D6B"/>
    <path d="M39.2257 45.8005L45.0148 31.3784C45.0374 31.3107 45.0938 31.2543 45.1503 31.2091L50.5106 28.2186C50.7701 28.0719 51.0748 28.3315 50.962 28.6136L42.4419 49.7051C42.3516 49.9421 42.0356 49.9759 41.8889 49.7728L39.2595 46.1052C39.2031 46.0149 39.1805 45.9021 39.2257 45.8005Z" fill="#474D6B"/>
    <path d="M22.0839 20.6578L19.0031 43.2051C18.9693 43.4534 19.2175 43.6452 19.4432 43.5436L23.5509 41.7606C23.6525 41.7155 23.7202 41.6252 23.7428 41.5123L25.8756 26.0971C25.8869 26.0294 25.8756 25.9504 25.8305 25.894L22.6707 20.545C22.524 20.2741 22.129 20.3531 22.0839 20.6578Z" fill="#474D6B"/>
    <path d="M31.8905 44.6609L35.7048 30.2049C35.7274 30.1259 35.7838 30.0469 35.8628 30.013L46.4707 24.2464C46.7302 24.0997 47.0349 24.3593 46.9221 24.6414L36.4158 50.7999C36.3142 51.0368 35.9982 51.0707 35.8515 50.8563L31.9357 44.9204C31.8793 44.8414 31.868 44.7511 31.8905 44.6609Z" fill="#474D6B"/>
    </g>
    </svg>
  </div>
}
class AXXLoading{
  constructor(ele){
    this.ele = ele;
    this.init(this.ele);
  }
  init(ele){
    if(!ele){
      const box = document.createElement('div');
      document.body.appendChild(box);
      ReactDOM.render(
        <Loading />
      ,box);
      this.ele = document.getElementById('axxAiLoading');
    }
  }
	show(){
    this.ele.classList.remove('axxAiLoadingHide');
    this.ele.classList.add('axxAiLoadingShow');
  };
	hide(){
    this.ele.classList.remove('axxAiLoadingShow');
    this.ele.classList.add('axxAiLoadingHide');
  };
}
const ele = document.getElementById('axxAiLoading');
const AxxLoading  = new AXXLoading(ele);
export default AxxLoading;