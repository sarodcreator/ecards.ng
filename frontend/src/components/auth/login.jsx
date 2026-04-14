import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_ENDPOINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch, useSelector} from 'react-redux';
import { setLoading, setUser } from '@/redux/authslice';

export const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const { loading, user} = useSelector((store) => store.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const changeEventHandler = (e) => {
        setInput({ ...input, [ e.target.name ] : e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!input.email || !input.password) {
            return toast.error("All fields are required");
        };

        try {
            dispatch(setLoading(true));
            const res = await axios.post(`$(USER_API_ENDPOINT)/login`, input, {
                headers: {"content-Type": "application/json"},
                withCredentials: true,
            });
            console.log(res.data);

            if (res.data.success) {
                dispatch(setUser(res.data.user));
                navigate("/dashboard");
            };
        } catch (error) {
            console.log(error);
            toast.error(
                error?.response?.data?.message || error.message || "Login failed"
            );
        } finally {
            dispatch(setLoading(false));
        };
        useEffect(() => {
          if (user) navigate("/dashboard");
        }, [user]);
    };
    

    return (
        <div>
            login
        </div>
    );
}