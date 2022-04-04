import Pic from '../../imgs/profile-pic.png'

export default function ProfilePic() {
    return (
        <div className="column is-3 right-image" id="right-profile-img" data-aos="fade-left">
            <img className="is-rounded" src={Pic} alt="Paulilna Le" />
        </div>
    )
}
