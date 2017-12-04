import { h, Component } from 'preact'
import css from './TabButton.css'

class TabButton extends Component {
  _handleTabClose (event) {
    event.stopPropagation()

    this.props.onClose()
  }

  render () {
    const {
      active,
      children,
      fixed,
      onClick
    } = this.props

    let containerClasses = [css.button]
    let textClasses = [css.text]

    if (active) {
      containerClasses.push(css.buttonActive)
    }

    if (!fixed) {
      textClasses.push(css.textClosable)
    }

    return (
      <div
        class={containerClasses.join(' ')}
        onClick={onClick}
      >
        <span class={textClasses.join(' ')}>
          {children}
        </span>

        {!fixed && (
          <button
            class={css.icon}
            onClick={this._handleTabClose.bind(this)}
          >
            {/*
              This Source Code Form is subject to the terms of the Mozilla Public - License, v. 2.0.
              If a copy of the MPL was not distributed with this - file,
              You can obtain one at http://mozilla.org/MPL/2.0/.
            */}
            <svg viewBox="0 0 6 6" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.35191454,5.27895256 L5.31214367,1.35518468 C5.50830675,1.16082764 5.50977084,0.844248536 5.3154138,0.648085456 C5.12105677,0.451922377 4.80447766,0.450458288 4.60831458,0.644815324 L0.648085456,4.56858321 C0.451922377,4.76294025 0.450458288,5.07951935 0.644815324,5.27568243 C0.83917236,5.47184551 1.15575146,5.4733096 1.35191454,5.27895256 L1.35191454,5.27895256 Z"
                stroke="none"
                fill="#696969"
                fillRule="evenodd"
              />
              <path
                d="M5.31214367,4.56858321 L1.35191454,0.644815324 C1.15575146,0.450458288 0.83917236,0.451922377 0.644815324,0.648085456 C0.450458288,0.844248536 0.451922377,1.16082764 0.648085456,1.35518468 L4.60831458,5.27895256 C4.80447766,5.4733096 5.12105677,5.47184551 5.3154138,5.27568243 C5.50977084,5.07951935 5.50830675,4.76294025 5.31214367,4.56858321 L5.31214367,4.56858321 Z"
                stroke="none"
                fill="#696969"
                fillRule="evenodd"
              />
            </svg>
        </button> 
        )}
      </div>
    )
  }
}

export default TabButton