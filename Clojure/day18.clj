(ns day18
  (:require [input :refer [f->str]]))

(defn -show [g xy] (doseq [y (range xy) x (range xy)] (print (g [x y])) (when (= x (dec xy)) (prn))))

(defn parse [it]
  (->> it
       (reduce (fn [[[x y] g] c] (case c \newline [[0 (inc y)] g] [[(inc x) y] (assoc g [x y] c)]))
        [[0 0] {}])
       second))

(defn adjacent-on [grid [x y]]
  (->
   (for [yy [(dec y) y (inc y)], xx [(dec x) x (inc x)] :when (not= [x y] [xx yy])] (grid [xx yy]))
   frequencies
   (get \# 0)))

(defn step [grid xy part]
  (reduce
   (fn [new pos]
     (if (and (= part 2) (contains? #{[0 0] [xy 0] [xy xy] [0 xy]} pos)) (assoc new pos \#)
         (let [c (grid pos), on (adjacent-on grid pos)]
           (case c
             \. (cond-> new (= on 3) (assoc pos \#))
             \# (cond-> new (or (< on 2) (> on 3)) (assoc pos \.))))))
   grid (keys grid)))

(defn configure [it steps part]
  (let [xy (->> it keys (map first) (apply max))]
    (loop [s 0, g it]
      (if (= s steps) (-> g vals frequencies (get \#))
          (recur (inc s) (step g xy part))))))

(defn -main [day]
  (let [solve (partial configure (->> day f->str parse) 100)]
    {:part1 (solve 1) :part2 (solve 2)}))


(comment
  (let [test-input [[".#.#.#\n...##.\n#....#\n..#...\n#.#..#\n####.." 1 4  4]
                    ["##.#.#\n...##.\n#....#\n..#...\n#.#..#\n####.#" 2 5 17]]]
    (for [[it p s e] test-input] (= e (-> it parse (configure s p)))))
  )
