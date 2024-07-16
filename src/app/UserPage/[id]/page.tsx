import {UserPageHeader, UserPageContent} from '../../../index'

type Props = {
    session: any;
}

const UserPage : React.FC<Props> = (props) => {
    console.log(props.session);
    return (
        <div>
            <UserPageHeader user = {props.session.user} />
            <UserPageContent />
        </div>
    )
}

export default UserPage;