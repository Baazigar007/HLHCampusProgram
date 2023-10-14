import { useEffect, useState } from "react";
import "./EditUser.css";
import createUserFromData from "../../../backend/createUser";
import Loading from "../../../components/Loading/Loading";
import AdminSheet from "../../../components/AdminSheet/AdminSheet";
import school_names from "../../Login/schooldata";
import updateUserData from "../../../backend/updateUserData";
const EditUser = (props) => {
  const [email, setEmail] = useState(props.data.email);
  const [phone, setPhone] = useState(props.data.phone);
  const [college, setCollege] = useState(props.data.college);
  const [sorority, setSorority] = useState(props.data.sorority);
  const [loading, setLoading] = useState(false);
  const [schools, setSchools] = useState([]);
  
  function is_10_digit_string(string) {
    return string.length === 10 && string.match(/^\d{10}$/) !== null;
  }

  useEffect(() => {
    setSchools(school_names);
  }, []);
  async function EditUserDetails() {
    if (
      email === null ||
      phone === null ||
      college === null || !is_10_digit_string(phone) 
    ) {
      alert("Fill in all the necessary fields in correct format!");
    } else {
      const userObject = {
        email: email,
        phone: phone,
        college: college,
        sorority: sorority,
        userId: props.data.userId
      };
      async function Edit() {
        await updateUserData(userObject);
      }
      setLoading(true);
      await Edit();
      setLoading(false);
    }
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="edituser-body">
          <h1>Edit User Details</h1>
          <section>
            <input
              type="text"
              className="user-input"
              name="email"
              placeholder="email"
              id=""
              value={email}
              onChange={(evt) => {
                const input = evt.target.value;
                const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; 
                if (emailPattern.test(input)) {
                
                  setEmail(input);
                }
                
                // If it's not a valid email, you can choose to ignore it or display an error message.
              }}
            />
            <input
              type="tel"
              value={phone}
              className="user-input"
              name="phone"
              placeholder="phone number"
              id=""
              onChange={(evt) => {
               setPhone(evt.target.value)
             
                // If it's not a valid phone number, you can choose to ignore it or display an error message.
              }}
            />

            <div className="">
              <select
                name="status"
                id="status"
                value={college}
                className="type-drop"
                onChange={(evt) => {
                  setCollege(evt.target.value);
                }}
              >
                <option value="all">College</option>
                {schools.map((element) => {
                  return <option value={element}>{element}</option>;
                })}
              </select>
            </div>
            {/* <input
            type="text"
            className="user-input"
            name="college"
            placeholder="college"
            id=""
            onChange={(evt) => setCollege(evt.target.value)}
          /> */}
            <input
              type="text"
              className="user-input"
              name="sorority"
              value={sorority}
              placeholder="sorority"
              id=""
              onChange={(evt) => setSorority(evt.target.value)}
            />

            <button onClick={() => EditUserDetails()} className="submit-button">
              Submit
            </button>
          </section>
        </div>
      )}
    </>
  );
};

export default EditUser;
