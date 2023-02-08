(ns day15
  (:require [input :refer [f->nums nums]]))

(defn -main [day]
  (let [it (->> day f->nums (partition 5) (apply mapv vector))
        multi-sum #(apply + (mapv * %1 %2))
        product (for [a (range 1 101) b (range 1 101) c (range 1 101) d (range 1 101) :when (= 100 (+ a b c d))]
                  [(apply * (map #(let [x (multi-sum [a b c d] %)] (if (> x 0) x 0)) (drop-last it)))
                   (multi-sum [a b c d] (last it))])
        sorted (sort-by first > product)]
    {:part1 (ffirst sorted)
     :part2 (ffirst (drop-while #(not= 500 (second %)) sorted))}))


(comment
  (let [test-input "Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8
Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3"
        it (->> test-input nums (partition 5) (apply mapv vector))
        f #(apply + (mapv * %1 %2))
        p (for [a (range 1 101) b (range 1 101) :when (= 100 (+ a b))]
            [(apply * (map #(let [x (f [a b] %)] (if (> x 0) x 0)) (drop-last it))) (f [a b] (last it))])
        s (sort-by first > p)]
    {:1 (= 62842880 (ffirst s))
     :2 (= 57600000 (ffirst (drop-while #(not= 500 (second %)) s)))})
  )
