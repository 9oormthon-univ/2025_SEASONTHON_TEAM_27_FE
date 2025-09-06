import "../styles/Mail.css";
import HomeHeader from "../components/HomeHeader";
import HomeFooter from "../components/HomeFooter";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import left from "../assets/left.svg";
import goback from "../assets/goback.svg";
import gofront from "../assets/gofront.svg";

export default function Mail() {
  const { id } = useParams();
  const nav = useNavigate();
  const currentId = Number(id);

  const [sentAt, setSentAt] = useState("");
  const [contentUrl, setContentUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://15.164.189.54:8080/api/archive?content_id=${currentId}`
        );
        const json = await response.json();
        if (json.result === "SUCCESS") {
          setSentAt(json.data.sent_at);
          setContentUrl(json.data.content);
        } else {
          setSentAt("");
          setContentUrl("");
          console.error("API error:", json.error);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setSentAt("");
        setContentUrl("");
      }
    }

    fetchData();
  }, [currentId]);

  const handleGoBack = () => {
    if (currentId > 1) {
      nav(`/mail/${currentId - 1}`);
    }
  };
  const handleGoFront = () => {
    nav(`/mail/${currentId + 1}`);
  };

  return (
    <div>
      <div>
        <HomeHeader />
      </div>
      <div className="mail-bg">
        <div className="mail-container">
          <hr className="mail-line" />
          <div className="mail-header">
            <img className="mail-back" src={left} alt="left" />
            <div className="mail-title">{sentAt || "안녕하시구리!"}</div>
          </div>
          <hr className="mail-line" />
          <div className="mail-content-container">
            <div className="mail-content">
                {contentUrl ? (
                <img src={contentUrl} alt="메일 콘텐츠" style={{ maxWidth: "100%" }} />
                ) : (
                "메일 !"
                )}
            </div>
          </div>
          <hr className="mail-line" />
          <div className="mail-buttons">
            <img
              className="mail-button"
              src={goback}
              alt="goback"
              onClick={handleGoBack}
              style={{
                cursor: currentId > 1 ? "pointer" : "not-allowed",
                opacity: currentId > 1 ? 1 : 0.5,
              }}
            />
            <img
              className="mail-button"
              src={gofront}
              alt="gofront"
              onClick={handleGoFront}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      <div>
        <HomeFooter />
      </div>
    </div>
  );
}
