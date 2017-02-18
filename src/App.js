import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <table>
        <tbody>
        <tr>
            <td id="left">
                <p id="role" style={{backgroundColor:this.props.color, color:this.props.textcolor}}>{this.props.role}</p>
                <p id="kcse-title">KCSE 2017</p>
                <p id="kcse-title-korean">한국 소프트웨어공학 학술대회</p>
                <p id="full-name">{this.props.fullname}</p>
                <p id="affiliation">{this.props.affiliation}</p>
                <p id="supporter">한국정보과학회 소프트웨어공학 소사이어티<br/>한국정보처리학회 소프트웨어공학 연구회</p>
                <p id="date">2017.2.8~2.10</p>

            </td>
            <td id="right">
                <p id="announce_title">안내</p>
                <div id="announce">
                    <p>아침 세션 정시 도착 시 경품추첨권 2장 추가 증정<br/>(2월 9일 9시, 2월 10일 9시 30분)</p>
                    <p>조식 장소: 1층 아델리아<br/>중식 및 석식 장소: 지하 1층 한상<br/>만찬 장소: 그랜드 홀 I</p>
                    <p>스키 리프트권 40%, 사우나 50% 할인<br/>(본 명찰 제시)</p>
                    <p>WiFi SSID: hanhwa*** (비밀번호 없음)</p>
                </div>
                <div id="contact">
                    <p>조직위원장: 홍길동 교수 010-xxxx-xxxx</p>
                    <p>등록데스크: 홍길동 010-xxxx-xxxx</p>
                    <p>숙박 문의 : 한화 리조트 홍길동 02-xxx-xxxx</p>
                    <p>기타 문의 : 현장 스태프 (파란색 후드티 착용)</p>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
    );
  }
}

export default App;
