import React from "react";
import { InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { CgArrowLongRight } from 'react-icons/cg'
import "./cards.scss"

const Cards = () => {
  const items = [
    {
      title: "Please help Karanveer's family",
      date: "27 June 2022",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque iusto assumenda vero atque illum eaque quia voluptatem eligendi, eos nostrum!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITnzU_WWQ36lLq0O4OeWmhCxZ9iJUKc1L-A&usqp=CAU",
      lastdonation: "last donation 12min",
      raised: "$216,306",
      total: "$250,000",
    },
    {
      title: "Please help Karanveer's family",
      date: "27 June 2022",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque iusto assumenda vero atque illum eaque quia voluptatem eligendi, eos nostrum!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITnzU_WWQ36lLq0O4OeWmhCxZ9iJUKc1L-A&usqp=CAU",
      lastdonation: "last donation 12min",
      raised: "$216,306",
      total: "$250,000",
    },
    {
      title: "Please help Karanveer's family",
      date: "27 June 2022",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque iusto assumenda vero atque illum eaque quia voluptatem eligendi, eos nostrum!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITnzU_WWQ36lLq0O4OeWmhCxZ9iJUKc1L-A&usqp=CAU",
      lastdonation: "last donation 12min",
      raised: "$216,306",
      total: "$250,000",
    },
    {
      title: "Please help Karanveer's family",
      date: "27 June 2022",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque iusto assumenda vero atque illum eaque quia voluptatem eligendi, eos nostrum!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITnzU_WWQ36lLq0O4OeWmhCxZ9iJUKc1L-A&usqp=CAU",
      lastdonation: "last donation 12min",
      raised: "$216,306",
      total: "$250,000",
    },
    {
      title: "Please help Karanveer's family",
      date: "27 June 2022",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque iusto assumenda vero atque illum eaque quia voluptatem eligendi, eos nostrum!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITnzU_WWQ36lLq0O4OeWmhCxZ9iJUKc1L-A&usqp=CAU",
      lastdonation: "last donation 12min",
      raised: "$216,306",
      total: "$250,000",
    },
    {
      title: "Please help Karanveer's family",
      date: "27 June 2022",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque iusto assumenda vero atque illum eaque quia voluptatem eligendi, eos nostrum!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITnzU_WWQ36lLq0O4OeWmhCxZ9iJUKc1L-A&usqp=CAU",
      lastdonation: "last donation 12min",
      raised: "$216,306",
      total: "$250,000",
    },
    {
      title: "Please help Karanveer's family",
      date: "27 June 2022",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque iusto assumenda vero atque illum eaque quia voluptatem eligendi, eos nostrum!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITnzU_WWQ36lLq0O4OeWmhCxZ9iJUKc1L-A&usqp=CAU",
      lastdonation: "last donation 12min",
      raised: "$216,306",
      total: "$250,000",
    },
    {
      title: "Please help Karanveer's family",
      date: "27 June 2022",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque iusto assumenda vero atque illum eaque quia voluptatem eligendi, eos nostrum!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITnzU_WWQ36lLq0O4OeWmhCxZ9iJUKc1L-A&usqp=CAU",
      lastdonation: "last donation 12min",
      raised: "$216,306",
      total: "$250,000",
    },
    {
      title: "Please help Karanveer's family",
      date: "27 June 2022",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque iusto assumenda vero atque illum eaque quia voluptatem eligendi, eos nostrum!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITnzU_WWQ36lLq0O4OeWmhCxZ9iJUKc1L-A&usqp=CAU",
      lastdonation: "last donation 12min",
      raised: "$216,306",
      total: "$250,000",
    }
  ];
  return (
    <div className="main">
      <div className="searchbar">
        <OutlinedInput
          size="medium" placeholder="Search your favourite campaign"
          className="searchinput" endAdornment=
          {
            <InputAdornment position="end">
              <SearchIcon className="search-icon" />
            </InputAdornment>
          }
        />
      </div>
      <h1>Non proin volutpat vitae eget quisque sapien.</h1>

      <div className="donations">
        {items.map((item) => {
          return (
            <>
              <div className="displaycards " data-aos="zoom-in">
                <div className="cardimagecontainer">
                  <img src={`${item.image}`} alt="logo" />
                </div>
                <div className="date">
                  <p className="date1">{item.date}</p>
                  <p className="date2">{item.lastdonation}</p>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="amount">
                  <p>
                    <span>{item.raised}</span> of {item.total}
                  </p>
                </div>
                <button>Donate now</button>
              </div>
            </>
          );
        })}
      </div>
      <div className="page">
        <Stack spacing={2}>
            <Pagination count={50} hidePrevButton hideNextButton shape="rounded" color="primary" className="pagination" />
        </Stack>
        <div className="moreoption">
            <p>See more campaign </p><CgArrowLongRight/></div>
      </div>
    </div>
  );
};

export default Cards;
