// import React from "react";
// import Wrapper from "../wrappers/SubmitProposal";
// import { ImCross } from "react-icons/im";
// import axios from "axios";
// import { useAppContext } from "../../../context/appContext";
// import { toast } from "react-toastify";


// const SubmitProporsal = React.memo(({ ismodal, onbid }) => {
//   const toastOptions = {
//     position: "bottom-right",
//     autoClose: 8000,
//     pauseOnHover: true,
//     draggable: true,
//     theme: "dark",
//   };
//   const { user } = useAppContext();
//   const [selectedFile, setSelectedFile] = React.useState(null);
//   const [setBid, setSelectedBid] = React.useState(0);

//   const jobId = window.location.pathname.split("/")[3];

//   const handleFileSelect = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };
//   const handleBidSelect = (event) => {
//     setSelectedBid(event.target.value);
//   };
//   // const onBidChange = async (e) => {};
//   const handleApply = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("bid", setBid);
//     formData.append("jobId", jobId);
//     formData.append("proposal", selectedFile);

//     const token = localStorage.getItem("token");
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "content-type": `multipart/form-data; boundary=${formData._boundary}`,
//       },
//     };
    

//     axios
//       .post("/api/v1/job/sendProposal", formData, config)
//       .then((result) => {
//         axios
//           .post(
//             "/api/v1/job/applyForJob",
//             {
//               bid: setBid,
//               jobId: jobId,
//               proposal: result.data.file,
//             },
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           )
//           .then((result) => {
           
//             toast.success(result.data.msg, toastOptions);
//             window.location.reload();
//           })
//           .catch((err) => {
//             toast.error("Already Applied for this job", toastOptions);
//           });
//       })
//       .catch((err) => {
//         toast.error(err, toastOptions);
//       });
//   };
//   return (
//     <Wrapper className={ismodal ? "glassmorphism active " : "glassmorphism"}>
//       <form className="form-container" encType="multipart/form-data">
//         <h1>Apply here</h1>
//         <label htmlFor="">Apply</label>
//         <input
//           className="bid"
//           type="text"
//           name="bid"
//           id="bid"
//           placeholder="What attracted you towards this"
//           onChange={handleBidSelect}
//           required
//         />
//         <label htmlFor="">File</label>
//         <input
//           type="file"
//           name="image"
//           id="proposal"
//           onChange={handleFileSelect}
//           required
//           accept="application/pdf"
//         />
//         <ImCross className="icon" onClick={onbid} />
//         <button className="btn-submit" type="submit" onClick={handleApply}>
//           Submit
//         </button>
//       </form>
//     </Wrapper>
//   );
// });
// export default SubmitProporsal;





import React, { useState } from "react";
import Wrapper from "../wrappers/SubmitProposal";
import { ImCross } from "react-icons/im";
import axios from "axios";
import { useAppContext } from "../../../context/appContext";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const SubmitProporsal = React.memo(({ ismodal, onbid }) => {
  const [file, setFile] = useState(null);
  const [bid, setBid] = useState("");
  const { token } = useAppContext();
  const { id } = useParams();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
  };

  const handleBidSelect = (e) => {
    setBid(e.target.value);
  };

  const handleApply = async (e) => {
    e.preventDefault();

    if (!file || !bid) {
      toast.error("Please fill all fields", toastOptions);
      return;
    }

    const formData = new FormData();
    formData.append("proposal", file);
    formData.append("bid", bid);

    try {
      const response = await axios.post(
        `https://startopia-backend.onrender.com/api/v1/job/${id}/apply`, 
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      
      if (response.data.success) {
        toast.success(response.data.msg, toastOptions);
        window.location.reload();
      } else {
        toast.error(response.data.msg || "Error submitting application", toastOptions);
      }
    } catch (err) {
      console.error('Submission error:', err);
      const errorMessage = err.response?.data?.msg || "Error submitting application";
      toast.error(errorMessage, toastOptions);
    }
  };

  return (
    <Wrapper className={ismodal ? "glassmorphism active " : "glassmorphism"}>
      <form className="form-container" onSubmit={handleApply} encType="multipart/form-data">
        <h1>Apply here</h1>
        <label htmlFor="bid">Proposal</label>
        <input
          className="bid"
          type="text"
          name="bid"
          id="bid"
          placeholder="What attracted you towards this"
          onChange={handleBidSelect}
          value={bid}
          required
        />
        <label htmlFor="proposal">File</label>
        <input
          type="file"
          name="proposal"
          id="proposal"
          onChange={handleFileSelect}
          required
          accept="application/pdf"
        />
        <ImCross className="icon" onClick={onbid} />
        <button className="btn-submit" type="submit">
          Submit
        </button>
      </form>
    </Wrapper>
  );
});

export default SubmitProporsal;
