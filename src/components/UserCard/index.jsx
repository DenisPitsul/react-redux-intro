import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import userImage from "./userImage.jpg";
import styles from "./UserCard.module.css";
import { connect } from "react-redux";
import { addFollower, changeIsFavorite } from "../../store/slices/userSlice";

function UserCard({
  fullName,
  userName,
  tweets,
  following,
  followers,
  gender,
  isFavorite,
  changeFavorite,
  addNewFollower,
}) {
  const userCardSwadowStyle = {
    boxShadow: `0 0 20px 5px ${gender === "male" ? "blue" : "violet"}`,
  };

  const starStyle = {
    color: isFavorite ? "yellow" : "#333333",
  };

  function onAddClick() {
    addNewFollower();
  }

  function onStarClick() {
    changeFavorite();
  }

  return (
    <article className={styles.userCard} style={userCardSwadowStyle}>
      <div className={styles.userImageWrapper}>
        <div className={styles.backgroundColor}></div>
        <img className={styles.userImage} src={userImage} alt={fullName} />
        <FaStar
          onClick={onStarClick}
          className={styles.starIcon}
          style={starStyle}
        ></FaStar>
        <div className={styles.userContent}>
          <h2 className={styles.fullName}>{fullName}</h2>
          <p className={styles.userName}>{userName}</p>
          <button onClick={onAddClick} className={styles.addButton}>
            +
          </button>
        </div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.userInfoItem}>
          <h3 className={styles.statisticTitle}>Tweets</h3>
          <p className={styles.statisticValue}>{tweets}</p>
        </div>
        <div className={styles.userInfoItem}>
          <h3 className={styles.statisticTitle}>Following</h3>
          <p className={styles.statisticValue}>{following}</p>
        </div>
        <div className={styles.userInfoItem}>
          <h3 className={styles.statisticTitle}>Followers</h3>
          <p className={styles.statisticValue}>{followers}</p>
        </div>
      </div>
    </article>
  );
}

function mapStateToProps(state) {
  return state.user;
}

function mapDispatchToProps(dispatch) {
  return {
    changeFavorite: () => dispatch(changeIsFavorite()),
    addNewFollower: () => dispatch(addFollower()),
  };
}

const withAccessToStore = connect(mapStateToProps, mapDispatchToProps);

export default withAccessToStore(UserCard);
