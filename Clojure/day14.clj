(ns day14
  (:require [input :refer [f->str]]))

(defn parse [it]
  (->> it
       (re-seq #"[A-Z]\w+|\d+")
       (partition 4)
       (map (fn [[n & r]] (cons n (map parse-long r))))))

(defn distance [deers sec]
  (for [[n spd mov res] deers :let [[q s] (apply (juxt quot rem) [sec (+ mov res)])]]
    [n (if (> s mov) (* (inc q) spd mov) (+ (* q spd mov) (* s spd)))]))

(defn scores [deers time]
  (->> (range 1 (inc time))
       (map (partial distance deers))
       (reduce
        (fn [sx dx]
          (let [mx (apply max (map second dx)), wx (keep #(when (= mx (second %)) (first %)) dx)]
            (reduce #(update %1 %2 inc) sx wx)))
        (zipmap (map first deers) (repeat 0)))
       vals (apply max)))

(defn -main [day]
  (let [input [(->> day f->str parse) 2503]]
    {:part1 (->> input (apply distance) (sort-by second) last second)
     :part2 (apply scores input)}))


(comment
  (let [test-input (parse "Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.
Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.")]
    {:1 (= 1120 (->> (distance test-input 1000) (sort-by second) last second))
     :2 (=  689 (scores test-input 1000))})
  )
