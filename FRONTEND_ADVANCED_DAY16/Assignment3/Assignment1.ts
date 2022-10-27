interface IGps{
    coord1:number;
    coord2:number;
  getCoordinates():void
}
interface IMediaPlayer{
        start():void;
        stop():void;
        pause():void;
}
class SmartPhone implements IGps,IMediaPlayer{
    public coord1: number=23;
    public coord2: number=25;
    public getCoordinates(): void {
        console.log(this.coord1);
        console.log(this.coord2);
    }
    public start(): void {
        console.log("media player started");
    }
    public stop(): void {
        console.log("Media player stop");
    }
    public pause():void{
        console.log("Media player is paused");
    }

}
var sm:SmartPhone=new SmartPhone();
sm.getCoordinates();
sm.start();
sm.pause();
sm.stop();