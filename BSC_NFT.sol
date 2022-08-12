// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

//import ERC 1155 contract from Openzeppelin
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeMath.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/IERC1155.sol";


contract NFT is ERC1155{
    using SafeMath for uint256;

    constructor() ERC1155("https://ipfs.moralis.io:2053/ipfs/QmdXz14X28vszFiK4JHvkAySG2d1hbSR4drPjMMii38kKg/metadata/{id}.json"){
        _mint(msg.sender,0,1,"");
        _mint(msg.sender,1,1,"");
        _mint(msg.sender,2,1,"");
    }
}
//0x199b6c3D9BE510CC298d2AF3872D578013d1eF11
