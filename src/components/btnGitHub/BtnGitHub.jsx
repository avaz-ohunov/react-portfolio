import './btnGitHub.css'

import gitHubIcon from '../../img/icons/gitHub-black.svg'


export default function BtnGitHub({ link }) {
    return (
        <a href={ link } target='_blank' className="btn-outline">
            <img src={ gitHubIcon } alt="" />
            GitHub repo
        </a>
    )
}