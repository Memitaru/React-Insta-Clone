import React from 'react';
import logo from "../../assets/iglogo.png";
import userIcon from '../../assets/user-icon.svg';
import compassIcon from '../../assets/compass.svg';
import heartIcon from '../../assets/heart.svg';
import icon from '../../assets/icon.svg'
import styled from 'styled-components';
import LogOutMenu from './Dropdown';

const SearchContainer = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15% 0 15%;
    background-color: white;
    border-bottom: 1px solid #E6E6E6;
    margin-bottom: 50px;

    @media(max-width: 800px){
        padding: 5px 10%;
    }

    @media(max-width: 500px){
        padding: 5px 1%;
    }
`
const LogoContainer = styled.div`
    height: 50px;
    display: flex;
    justify-content: flex-start;
`

const SearchInput = styled.input`
    height: 25px;
    margin-bottom: 5px;
    background-color: #FAFAFA;
    border: 1px solid #E6E6E6;
    color: black;
    text-align: center;
    &::-webkit-input-placeholder {
        color: #A5A7AA;
`

const SearchForm = styled.form`
    margin-left: -8%;

    @media (max-width: 800px){
        margin-left: 8%;
    }

    @media (max-width: 500px){
        margin-left: 1%;
    }
`

const LogoDiv = styled.img `
    width: 150px;
    @media(max-width: 800px){
        display: none;
    }
`

const SearchBarIcon = styled.img`
    height: 25px;
    padding-right: 15px;
    padding-bottom: 5px;
`

const Divider = styled.span`
    font-size: 30px;
    padding: 0px 5px 0 2px;
    margin-top: -5px;

    @media(max-width: 800px){
        display: none;
    }
`

const LogoIcon = styled.img`
    height: 35px;
    padding: 5px 8px 0 0;
`

const SearchBar = props => {
    return(
        <SearchContainer>
            <LogoContainer>
                <LogoIcon src={icon} alt="instagram icon" /> 
                <Divider>|</Divider>
                <LogoDiv src={logo}/>
            </LogoContainer>
            <SearchForm onChange={props.searchPosts}>
            <SearchInput type="text" placeholder="Search" name="search" value={props.search} onChange={props.inputHandler}/></SearchForm>
            
            <div>
                <SearchBarIcon src={compassIcon} alt="compass icon" />
                <SearchBarIcon src={heartIcon} alt="heart icon" />
                <SearchBarIcon src={userIcon} alt="user icon" />
                <LogOutMenu />
            </div>
            
        </SearchContainer>
    )
}

export default SearchBar;