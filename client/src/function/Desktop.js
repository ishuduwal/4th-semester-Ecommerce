import * as api from '../api/Desktop';

export const GetDesktop = async () => {
    try {
        const { data } = await api.GetDesktop();
        return data
    } catch (error) {
        console.log(error)
    }
}
export const AddDesktop = async (desktop) => {
    try {
        const { data } = await api.AddDesktop(desktop);
        return data;
    } catch (error) {
        console.log(error);
    }
}
export const UploadDesktop = async (desktop) => {
    try {
        const { data } = await api.UploadDesktop(desktop);
        return data;
    } catch (error) {
        console.log(error);
    }
}
export const EditDesktop = async (updatedData) => {
    try {
        const { data } = await api.EditDesktop(updatedData);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const DeleteDesktop = async (desktopId) => {
    try {
        const { data } = await api.DeleteDesktop(desktopId);
        return data;
    } catch(error) {
        console.log(error);
    }
}