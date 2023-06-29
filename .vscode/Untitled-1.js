import javafx.application.Application;
import javafx.scene.Group;
import javafx.scene.PerspectiveCamera;
import javafx.scene.Scene;
import javafx.scene.paint.Color;
import javafx.scene.shape.Box;
import javafx.scene.transform.Rotate;
import javafx.stage.Stage;

public class RoughBiker3D extends Application {
    private static final int SCENE_WIDTH = 800;
    private static final int SCENE_HEIGHT = 600;
    private static final int BIKER_SIZE = 1;

    @Override
    public void start(Stage primaryStage) {
        // Create a box for the biker
        Box biker = new Box(BIKER_SIZE, BIKER_SIZE, BIKER_SIZE);
        biker.setTranslateZ(-5);
        biker.setMaterial(new javafx.scene.paint.PhongMaterial(Color.RED));

        // Create a group to hold the biker
        Group root = new Group(biker);

        // Create a camera and adjust its position
        PerspectiveCamera camera = new PerspectiveCamera(true);
        camera.setTranslateZ(-10);

        // Create a scene and set camera
        Scene scene = new Scene(root, SCENE_WIDTH, SCENE_HEIGHT);
        scene.setCamera(camera);

        // Handle rotation of the biker
        Rotate rotateX = new Rotate(0, Rotate.X_AXIS);
        Rotate rotateY = new Rotate(0, Rotate.Y_AXIS);
        biker.getTransforms().addAll(rotateX, rotateY);

        // Set up the primary stage
        primaryStage.setTitle("Rough Biker 3D");
        primaryStage.setScene(scene);
        primaryStage.show();

        // Animation loop
        final long startNanoTime = System.nanoTime();
        new javafx.animation.AnimationTimer() {
            public void handle(long currentNanoTime) {
                double t = (currentNanoTime - startNanoTime) / 1000000000.0; // Convert to seconds

                // Rotate the biker
                rotateX.setAngle(20 * Math.sin(t));
                rotateY.setAngle(40 * Math.sin(t));
            }
        }.start();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
