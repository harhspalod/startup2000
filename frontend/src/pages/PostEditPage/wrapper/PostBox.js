import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: max-content;
  
  .video-post {
      background-color: #ffffff;
    font-family: var(--inter-font);
    display: flex;
    flex-direction: column;
    padding-inline: max(25px, 4%);
    padding-block: 2.5%;
    width: 100%;
    border-radius: 25px;

    & > .post-content {
      position: relative;
      & > .post-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1;
        color: var(--black-color);
        margin-bottom: 7px;

        & > .userInfo {
          display: flex;
          gap: 3%;
          align-items: center;

          & > .username-location {
            display: flex;
            flex-direction: column;
            padding-left: 10px;

            & > .username {
              font-weight: 600;
              white-space: nowrap;
              font-size: 0.7rem;
            }

            & > .location {
              font-size: 0.6rem;
              color: var(--black-500);
            }
          }
        }

        & > .post-edit {
          position: relative;
          & > .icon {
            font-size: 1.1rem;
            cursor: pointer;
          }

          & > .edit-option {
            position: absolute;
            width: 40px;
            height: 80px;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 9%;
            justify-content: center;

            bottom: -80px;
            left: -10px;

            & > .icon {
              font-size: 1.5rem;
              margin-inline: auto;
              cursor: pointer;
            }
          }
        }
      }

      & .post-header.absolute {
        position: absolute;
        width: 100%;
        padding-inline: 2%;

        top: 2%;
        left: 2%;
        color: var(--white-color);
      }

      & > .post-image-section {
        & > .post-img {
          width: 100%;
          height: 415px;
          border-radius: 15px;
          aspect-ratio: 1/1;
          object-fit: cover;

          & > .music-img {
            animation: Loading 5s linear infinite;
          }

          & > .music-player {
            width: 100%;

            & > .music {
              width: 100%;
              height: 40px;
            }
          }
        }
      }

      & > .post-description {
        text-align: start;
        padding-left: 2.5%;
        font-size: 0.8rem;
        display: none;
      }

      & > .post-description.absolute {
        display: flex;
        width: 60%;
        position: absolute;
        bottom: 2%;
        left: 2%;
        color: var(--white-color);
      }

      & > .more-less {
        display: none;
      }
    }

    & > .post-option {
      display: flex;
      justify-content: space-between;
      margin: 0;

      align-items: center;
      & > .post-interaction {
        display: flex;
        gap: 4%;

        & > .icon {
          font-size: 1.7rem;
          color: var(--black-300);
        }

        & > .icon.red {
          color: red;
        }
      }
      & > .icon {
        font-size: 1.1rem;
      }

      & > .icon.black {
        font-size: 1.1rem;
        color: black;
      }
    }

    & > .post-description {
      display: flex;

      & > .username {
        color: var(--black-900);
        font-weight: bold;
        font-size: 0.9rem;
      }

      & > .post-desc {
        text-align: start;
        margin-left: 2.5%;
        font-size: 0.8rem;
      }
      & > .more-less {
        color: var(--black-500);
        cursor: pointer;
      }
    }

    .like-count {
      font-size: 0.9rem;
      color: var(--black-900);
    }

    & > .bookmark-icon {
      & > .icon {
        font-size: 0.2rem;
      }
    }

    .view-comments {
      color: var(--black-500);
      font-size: 0.8rem;
      cursor: pointer;
    }
  }
  .comments-section {
    margin-top: 10px;
    border-radius: 25px;
  }
`;

export default Wrapper;
