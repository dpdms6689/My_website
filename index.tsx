body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

/*header*/

header {
  display: flex;
  justify-content: space-between;
  /*flex-direction: row-reverse;*/
  border-bottom: 1px solid;
  padding: 10px 40px;
  min-height: 40px;
  align-items: center;
}

header .header__logo {
  color: black;
  font-weight: 700;
  font-size: 18px;
}
/*header 안에 링크*/
header a {
  margin: 0px 10px;
  text-decoration: none;
  color: gray;
}

header a:focus,
header a:hover {
  color: black;
}

/*post navigation*/
.post__Navigation {
  display: flex;
  gap: 12px;
  margin: 0 auto;
  max-width: 600px;
  font-size: 16px;
  color: gray;
  cursor: pointer;
  padding: 48px 20px 0px 20px;
}

.post__navigation--active {
  color: black;
  font-weight: 600;
}

/*post-list + detail*/
.post__list,
.post__detail {
  min-height: 90vh;
  padding: 20px 40px;
  text-align: center;
  max-width: 680px;
  margin: 0 auto;
  text-align: left;
  line-height: 24px;
}

.post__box {
  padding-top: 24px;
  padding-bottom: 24px;
  border-top: 1px solid #f2f2f2;
}

.post__profile-box {
  display: flex;
  gap: 8px;
  font-size: 14px;
  align-items: center;
}

.post__profile {
  width: 36px;
  height: 36px;
  background: #f2f2f2;
  border-radius: 50%;
}

.post__date,
.post__author-name {
  color: gray;
}

.post__title {
  font-size: 20px;
  font-weight: 600;
  margin: 14px 0px;
}

.post__text {
  font-size: 16px;
  color: dimgray;
}

.post__list a {
  text-decoration: none;
  color: black;
}

.post__utils-box {
  display: flex;
  gap: 8px;
  flex-direction: row-reverse;
  font-size: 14px;
  color: gray;
}

.post__delete:hover,
.post__edit:focus {
  color: black;
}

.post__edit:hover,
.post__edit:focus {
  color: black;
}

/*footer*/
footer {
  background-color: #f2f2f2;
  min-height: 40px;
  padding: 20px 40px;
  font-size: 14px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

/*footer 안에 링크*/
footer a {
  text-decoration: none;
  color: gray;
}

footer a:focus,
footer a:hover {
  color: black;
}

/*post detail*/
.post__detail .post__title {
  font-size: 36px;
  line-height: 40px;
}

.post__detail .post__utils-box {
  padding: 10px 0px;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
  flex-direction: row;
}

.post__detail .post__profile-box {
  padding: 10px 0px;
}

.post__detail .post__text {
  padding: 20px 0px;
}

/*profile*/
.profile__box {
  display: flex;
  gap: 18px;
  align-items: center;
  font-size:18px;
  margin: 0 auto;
  max-width: 680px;
  text-align: left;
  line-height: 24px;
  justify-content: space-between;
  padding: 20px;
}

.flex__box-group {
  display: flex;
  gap: 18px;
  align-items: center;
}

.profile__image {
  width: 72px;
  height: 72px;
  background-color: #f2f2f2;
  border-radius: 50%;
}

.profile__email {
  font-weight: 500;
}

.profile__name {
  font-size: 16px;
  padding-top: 4px;
}

.profile__logout {
  color: gray;
  font-size: 14px;
}

.profile__logout:hover, .profile__logout:focus {
  color: black;
}

/* carousel */

.carousel {
  margin: 0 auto;
  max-width: 980px;
  margin-top: 36px;
}

ul.carousel__slides {
  display: block;
  position: relative;
  height: 400px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style: none;
}

.carousel__slides * {
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}

ul.carousel__slides input {
  display: none;
}

.carousel__slide-container {
  display: block;
}

.carousel__slide-img {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0;
  transition: all 0.7s ease-in-out;
}

.carousel__slide-img img {
  width: auto;
  min-width: 100%;
  height: 100%;
}

.carousel__controls {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  font-size: 100px;
  line-height: 400px;
  color: #fff;
}

.carousel__controls label {
  display: none;
  position: absolute;
  padding: 0 20px;
  opacity: 0;
  transition: opacity 0.2s;
  cursor: pointer;
}

.carousel__slide-img:hover + .carousel__controls label {
  opacity: 0.5;
}

.carousel__controls label:hover {
  opacity: 1;
}

.carousel__controls .carousel__slide-prev {
  width: 49%;
  text-align: left;
  left: 0;
}

.carousel__controls .carousel__slide-next {
  width: 49%;
  text-align: right;
  right: 0;
}

.carousel__dots {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  z-index: 999;
  text-align: center;
}

.carousel__dots .carousel__dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.5;
  margin: 10px;
}

input:checked + .carousel__slide-container .carousel__slide-img {
  opacity: 1;
  transform: scale(1);
  transition: opacity 1s ease-in-out;
}

input:checked + .carousel__slide-container .carousel__controls label {
  display: block;
}

input#img-1:checked ~ .carousel__dots label#img-dot-1,
input#img-2:checked ~ .carousel__dots label#img-dot-2,
input#img-3:checked ~ .carousel__dots label#img-dot-3 {
  opacity: 1;
}

input:checked + .carousel__slide-container .nav label {
  display: block;
}

/* form */
.form {
  margin: 0 auto;
  max-width: 680px;
  padding: 20px;
  margin-top: 20px;
}

.form input {
  height: 48px;
  padding: 10px 10px;
  font-size: 16px;
  border-radius: 0.3rem;
  border: 1px solid lightgray;
  width: 100%;
  max-width: 680px;
}

.form textarea {
  min-height: 400px;
  padding: 10px 10px;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 0.3rem;
  border: 1px solid lightgray;
  width: 96%;
  max-width: 680px;
}

.form .form__block {
  margin-top: 20px;
  width: 100%;
}

.form label {
  display: block;
  font-weight: 500;
  margin-bottom: 10px;
  margin-top: 20px;
}

.form .form__btn--submit {
  width: 98%;
  height: 48px;
  font-weight: 600;
  padding: 10px 10px;
  float: right;
  cursor: pointer;
  margin: 0 auto;
  font-size: 16px;
  background-color: #2563eb;
  color: white;
}

.form .form__btn--submit:hover,
.form .form__btn--submit:focus {
  background-color: #1945a4;
}
