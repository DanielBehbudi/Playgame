# Python Tic-Tac-Toe mit KI

def print_board(board):
    for row in board:
        print(" | ".join(row))
        print("-" * 9)

def is_winner(board, player):
    # Überprüfen Sie, ob der Spieler gewonnen hat (z. B. horizontal, vertikal oder diagonal)
    # Implementieren Sie Ihre Logik hier
    pass

def is_board_full(board):
    return all(all(cell != " " for cell in row) for row in board)

def make_player_move(board):
    # Implementieren Sie die Spielerzuglogik hier
    pass

def make_ai_move(board):
    # Implementieren Sie die KI-Zuglogik hier
    pass

def play_game():
    board = [[" " for _ in range(3)] for _ in range(3]
    player_turn = True  # True für Spieler, False für KI

    while True:
        print_board(board)
        if player_turn:
            make_player_move(board)
        else:
            make_ai_move(board)

        if is_winner(board, "X"):
            print("Spieler hat gewonnen!")
            break
        elif is_winner(board, "O"):
            print("KI hat gewonnen!")
            break
        elif is_board_full(board):
            print("Unentschieden!")
            break

        player_turn = not player_turn

if __name__ == "__main__":
    play_game()
