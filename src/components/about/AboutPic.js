import Pic from '../../imgs/profile-pic.png'

export default function ProfilePic() {
    return (
        <div class="column is-6 right-image"  data-aos="fade-left" id="profilePic">
            <img class="is-rounded" src={Pic} alt="Paulilna Le" />
        </div>
    )
}
