import java.util.Scanner;

public class TicTacToe {
    public static void main(String[] args) {
        char[][] board = {
            {' ', ' ', ' '},
            {' ', ' ', ' '},
            {' ', ' ', ' '}
        };
        boolean playerX = true;

        Scanner scanner = new Scanner(System.in);

        while (true) {
            char symbol = (playerX) ? 'X' : 'O';

            printBoard(board);

            System.out.print("Spieler " + symbol + ", gib die Zeile (0-2) ein: ");
            int row = scanner.nextInt();
            System.out.print("Spieler " + symbol + ", gib die Spalte (0-2) ein: ");
            int col = scanner.nextInt();

            if (!isValidMove(board, row, col)) {
                System.out.println("Ungültiger Zug. Bitte versuche es erneut.");
                continue;
            }

            board[row][col] = symbol;

            if (isGameOver(board, symbol)) {
                printBoard(board);
                System.out.println("Spieler " + symbol + " hat gewonnen!");
                break;
            }

            if (isBoardFull(board)) {
                printBoard(board);
                System.out.println("Unentschieden!");
                break;
            }

            playerX = !playerX;
        }

        scanner.close();
    }

    public static void printBoard(char[][] board) {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.print(board[i][j]);
                if (j < 2) {
                    System.out.print(" | ");
                }
            }
            System.out.println();
            if (i < 2) {
                System.out.println("---------");
            }
        }
    }

    public static boolean isValidMove(char[][] board, int row, int col) {
        return (row >= 0 && row < 3 && col >= 0 && col < 3 && board[row][col] == ' ');
    }

    public static boolean isGameOver(char[][] board, char symbol) {
        // Überprüfen Sie, ob der Spieler gewonnen hat
        // Implementieren Sie Ihre Logik hier
        return false;
    }

    public static boolean isBoardFull(char[][] board) {
        return !Arrays.stream(board)
                .flatMapToInt(row -> Arrays.stream(row)
                        .mapToInt(cell -> (cell == ' ') ? 0 : 1))
                .anyMatch(value -> value == 0);
    }
}
