import { useState } from 'react';

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  // const [name, setName] = useState("이름");
  // const [birth, setBirth] = useState("");
  // const [country, setCountry] = useState("");
  // const [bio, setBio] = useState("");
  // input 객체로 만들어서 간단하게 ->

  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  })

  const onChange = (e) => {
    console.log(e.target.name, e.target.value)
    setInput({
      ...input,
      // name key값으로 분류
      [e.target.name]: e.target.value,
    })
  }

  // onChange로 통합시킴 ->
  // const onChangeName = (e) => {
  //   // setName(e.target.value);
  //   setInput({
  //     ...input,
  //     name: e.target.value
  //   })
  // }

  // const onChangeBirth = (e) => {
  //   // setBirth(e.target.value);
  //   setInput({
  //     ...input,
  //     birth: e.target.value
  //   })
  // }

  // const onChangeCountry = (e) => {
  //   // setCountry(e.target.value);
  //   setInput({
  //     ...input,
  //     country: e.target.value
  //   })
  // }

  // const onChangeBio = (e) => {
  //   // setBio(e.target.value);
  //   setInput({
  //     ...input,
  //     bio: e.target.value
  //   })
  // }

  return (
    <div>
      <div>
        <input
          // value={name}
          value={input.name}
          name='name'
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>

      <div>
        <input type='date'
          // value={birth}
          value={input.birth}
          name='birth'
          onChange={onChange}
        />
      </div>

      <div>
        <select
          // value={country}
          value={input.country}
          name='country'
          onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea
          // value={bio}
          value={input.bio}
          name='bio'
          onChange={onChange} />
      </div>
    </div>
  )
}

export default Register;