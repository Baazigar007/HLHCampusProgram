import { useState } from "react";
import "./CreateUser.css";
import createUserFromData from "../../../backend/createUser";
import Loading from "../../../components/Loading/Loading";

const CreateUser = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [pwd, setPwd] = useState(null);
  const [phone, setPhone] = useState(null);
  const [college, setCollege] = useState(null);
  const [sorority, setSorority] = useState(null);
  const [loading, setLoading] = useState(false);
  async function createNewUser() {
    if (
      name === null ||
      email === null ||
      pwd === null ||
      phone === null ||
      college === null
    ) {
      alert("Fill in all the compulsory fields!");
    } else {
      const userObject = {
        name: name,
        email: email,
        password: pwd,
        phone: phone,
        college: college,
        sorority: sorority,
        isAdmin: false,
        balance: 0,
        totalEarned: 0,
        taskSubmissions: [],
      };
      async function createUser(){
        await createUserFromData(userObject)
      }
      setLoading(true)
      await createUser();
      setLoading(false)
    }
  }
  return (
    <>
      {
        loading?<Loading/>:<div className="createuser-body">
        <h1>Create a new User</h1>
        <section>
          <input
            type="text"
            className="user-input"
            name="name"
            placeholder="name"
            id=""
            onChange={(evt) => setName(evt.target.value)}
          />
          <input
            type="text"
            className="user-input"
            name="email"
            placeholder="email"
            id=""
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <input
            type="password"
            className="user-input"
            name="password"
            placeholder="password"
            id=""
            onChange={(evt) => setPwd(evt.target.value)}
          />
          <input
            type="tel"
            className="user-input"
            name="phone"
            placeholder="phone number"
            id=""
            onChange={(evt) => setPhone(evt.target.value)}
          />
          <input
            type="text"
            className="user-input"
            name="college"
            placeholder="college"
            id=""
            onChange={(evt) => setCollege(evt.target.value)}
          />
          <input
            type="text"
            className="user-input"
            name="sorority"
            placeholder="sorority"
            id=""
            onChange={(evt) => setSorority(evt.target.value)}
          />

          <button onClick={() => createNewUser()} className="submit-button">
            Submit
          </button>
        </section>
      </div>
      }
    </>
  );
};

export default CreateUser;
