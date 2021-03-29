export default class Restoservice{
    _apiBase = 'http://localhost:3000';

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok){
            throw new Error('Server Error');
        }
        
        return await res.json();
    }
    async getMenuItems(){
            return await this.getResource(`/menu/`)
    }
}