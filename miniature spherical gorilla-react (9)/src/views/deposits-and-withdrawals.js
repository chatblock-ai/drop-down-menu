import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Component22 from '../components/component22'
import './deposits-and-withdrawals.css'

const DepositsAndWithdrawals = (props) => {
  return (
    <div className="deposits-and-withdrawals-container">
      <Helmet>
        <title>Deposits-and-Withdrawals - Miniature Spherical Gorilla</title>
        <meta
          property="og:title"
          content="Deposits-and-Withdrawals - Miniature Spherical Gorilla"
        />
      </Helmet>
      <div className="deposits-and-withdrawals-container1">
        <Component22></Component22>
        <Link to="/sign-in" className="deposits-and-withdrawals-navlink">
          <img
            alt="Home button"
            src="/playground_assets/simple-home-with-pixel-art-style_475147-414%20%5B1%5D-modified-300w.png"
            className="deposits-and-withdrawals-image"
          />
        </Link>
        <button
          name="Submit"
          type="submit"
          id="submit"
          className="deposits-and-withdrawals-button button"
        >
          Submit
        </button>
        <div className="deposits-and-withdrawals-container2">
          <button
            name="deposit"
            type="button"
            id="deposit"
            className="deposits-and-withdrawals-button1 button"
          >
            DEPOSIT
          </button>
          <button
            name="withdraw"
            type="button"
            id="withdraw"
            className="deposits-and-withdrawals-button2 button"
          >
            WITHDRAW
          </button>
        </div>
        <div className="deposits-and-withdrawals-container3">
          <img
            src="/playground_assets/image%20%5B41%5D-200h.png"
            alt="bnb"
            id="BNB1"
            className="deposits-and-withdrawals-image1"
          />
          <img
            src="/playground_assets/image%20%5B40%5D-200h.png"
            alt="image"
            id="BUSD1"
            className="deposits-and-withdrawals-image2"
          />
          <img
            src="/playground_assets/image%20%5B38%5D-200h.png"
            alt="image"
            id="USDT1"
            className="deposits-and-withdrawals-image3"
          />
          <input
            type="number"
            min="0.01"
            name="amount"
            step="0.1"
            placeholder="0.0"
            autoComplete="0.0"
            id="amount"
            className="deposits-and-withdrawals-textinput input button"
          />
          <div
            data-thq="thq-dropdown"
            className="deposits-and-withdrawals-thq-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="deposits-and-withdrawals-dropdown-toggle"
            >
              <div
                data-thq="thq-dropdown-arrow"
                className="deposits-and-withdrawals-dropdown-arrow"
              ></div>
              <span className="deposits-and-withdrawals-text">&gt;</span>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="deposits-and-withdrawals-dropdown-list"
            >
              <li
                data-thq="thq-dropdown"
                className="deposits-and-withdrawals-dropdown teleport-show list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="deposits-and-withdrawals-dropdown-toggle1 button"
                >
                  <button
                    id="BNB"
                    name="BNB"
                    type="button"
                    className="deposits-and-withdrawals-button3 button"
                  >
                    BNB
                  </button>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="deposits-and-withdrawals-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="deposits-and-withdrawals-dropdown-toggle2 button"
                >
                  <button
                    id="BUSD"
                    name="BUSD"
                    type="button"
                    className="deposits-and-withdrawals-button4 button"
                  >
                    BUSD
                  </button>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="deposits-and-withdrawals-dropdown2 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="deposits-and-withdrawals-dropdown-toggle3 button"
                >
                  <button
                    id="USDT"
                    name="USDT"
                    type="button"
                    className="deposits-and-withdrawals-button5 button"
                  >
                    USDT
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/layers%20%5B6%5D-200h.png"
        className="deposits-and-withdrawals-image4"
      />
    </div>
  )
}

export default DepositsAndWithdrawals
